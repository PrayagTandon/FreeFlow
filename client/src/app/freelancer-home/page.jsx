"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const trustBreakdown = [
    { color: "#FFB23F", label: "Default Trust", percent: 20 },
    { color: "#5B61F6", label: "Verified by GitHub", percent: 20 },
    { color: "#FF5B5B", label: "Email Verified", percent: 20 },
    { color: "#2AD4B7", label: "Phone Verified", percent: 20 },
    { color: "#A259FF", label: "Completed Projects", percent: 10 },
    { color: "#FFD600", label: "Activity", percent: 10 },
];

const jobs = [
    {
        title: "Website Development",
        description:
            "Build a modern, responsive website for a tech startup. Requires experience with React, Next.js, and UI/UX best practices. Deliver a landing page, blog, and contact form integrated with backend APIs.",
        tags: ["Web", "React", "Next.js", "UI/UX", "API"],
        proposals: 3,
        clientTrust: 92,
        photos: [1, 2, 3, 4],
    },
    {
        title: "DeFi Smart Contract Development",
        description:
            "Develop and audit a DeFi smart contract for a new protocol. Must have experience with Solidity, security best practices, and deploying to Ethereum testnets. Prior DeFi project experience preferred.",
        tags: ["DeFi", "Solidity", "Smart Contracts", "Audit", "Ethereum"],
        proposals: 5,
        clientTrust: 88,
        photos: [1, 2, 3, 4],
    },
];

export default function FreelancerHome() {
    const [freelancer, setFreelancer] = useState(null);
    const [hoveredArc, setHoveredArc] = useState(null);
    const trustScore = 100;
    const totalProjects = 5;
    const currentBids = 2;
    const radius = 84;
    const stroke = 18;
    const center = 100;
    const circumference = 2 * Math.PI * radius;
    let offset = 0;
    const router = useRouter();

    useEffect(() => {
        // Get freelancer from localStorage
        const freelancerStr =
            typeof window !== "undefined" ? localStorage.getItem("freelancer") : null;
        if (!freelancerStr) {
            router.push("/login");
            return;
        }
        try {
            const freelancerObj = JSON.parse(freelancerStr);
            setFreelancer(freelancerObj);
        } catch {
            router.push("/login");
        }
    }, [router]);

    if (!freelancer) {
        return null; // or a loading spinner
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <nav className="bg-gradient-to-r from-secondary-900 to-primary-500 text-white px-8 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <span className="text-xl font-bold">Logo</span>
                        <a
                            href="#"
                            className="text-white hover:text-primary-200 transition-colors font-medium"
                        >
                            Find Jobs
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-primary-200 transition-colors font-medium"
                        >
                            How It Works
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-primary-200 transition-colors font-medium"
                        >
                            Proposals
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-primary-200 transition-colors font-medium"
                        >
                            Messages
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <input
                            className="px-4 py-2 rounded-lg text-gray-900"
                            placeholder="Search"
                        />
                        <button className="bg-white text-secondary-900 px-4 py-2 rounded-lg font-medium hover:bg-primary-200 transition-colors">
                            Jobs ▾
                        </button>
                        <span className="text-2xl">🧑‍💻</span>
                    </div>
                </div>
            </nav>

            {/* User Info Card */}
            <div className="max-w-7xl mx-auto px-8 py-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex flex-col gap-2">
                        <div className="text-lg font-bold text-gray-900">
                            Welcome, {freelancer.name || "Freelancer"}!
                        </div>
                        <div className="text-gray-700">
                            <b>Email:</b> {freelancer.email}
                        </div>
                        <div className="text-gray-700">
                            <b>Wallet:</b> {freelancer.metamaskId || "Not connected"}
                        </div>
                        <div className="text-gray-700">
                            <b>Freelancer ID:</b> {freelancer.id}
                        </div>
                        {freelancer.cognitoId && (
                            <div className="text-gray-700">
                                <b>Cognito ID:</b> {freelancer.cognitoId}
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Trust Score Card */}
                        <div className="bg-purple-50 rounded-2xl p-6 flex items-center">
                            <div className="flex-shrink-0 w-40 h-40">
                                <svg
                                    width="200"
                                    height="200"
                                    viewBox="0 0 200 200"
                                    className="w-full h-full"
                                >
                                    <circle
                                        cx={center}
                                        cy={center}
                                        r={radius}
                                        stroke="#ede7fa"
                                        strokeWidth={stroke}
                                        fill="none"
                                    />
                                    {trustBreakdown.map((item, i) => {
                                        const arcLen = circumference * (item.percent / 100);
                                        const arc = (
                                            <circle
                                                key={item.label}
                                                cx={center}
                                                cy={center}
                                                r={radius}
                                                stroke={item.color}
                                                strokeWidth={stroke}
                                                fill="none"
                                                strokeDasharray={`${arcLen} ${circumference - arcLen}`}
                                                strokeDashoffset={-offset}
                                                strokeLinecap="round"
                                                style={{
                                                    cursor: "pointer",
                                                    opacity:
                                                        hoveredArc === i || hoveredArc === null ? 1 : 0.3,
                                                    transition: "opacity 0.2s",
                                                }}
                                                onMouseEnter={() => setHoveredArc(i)}
                                                onMouseLeave={() => setHoveredArc(null)}
                                            />
                                        );
                                        offset += arcLen;
                                        return arc;
                                    })}
                                    <text
                                        x="100"
                                        y="98"
                                        textAnchor="middle"
                                        fontSize="2.1rem"
                                        fontWeight="900"
                                        fill="#4b2e83"
                                    >
                                        {trustScore}%
                                    </text>
                                    <text
                                        x="100"
                                        y="125"
                                        textAnchor="middle"
                                        fontSize="1.05rem"
                                        fontWeight="700"
                                        fill="#6b7280"
                                    >
                                        Trust Score
                                    </text>
                                </svg>
                            </div>
                            <div className="ml-6 flex-1">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">
                                    Trust Score Breakdown
                                </h2>
                                <div className="grid grid-cols-2 gap-3">
                                    {trustBreakdown.map((item, i) => (
                                        <div
                                            key={item.label}
                                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-purple-100 transition-colors"
                                            style={{
                                                opacity:
                                                    hoveredArc === i || hoveredArc === null ? 1 : 0.3,
                                            }}
                                            onMouseEnter={() => setHoveredArc(i)}
                                            onMouseLeave={() => setHoveredArc(null)}
                                        >
                                            <div
                                                className="w-3 h-3 rounded-full"
                                                style={{ backgroundColor: item.color }}
                                            ></div>
                                            <span className="text-sm font-medium text-gray-700">
                                                {item.label}
                                            </span>
                                            <span className="text-sm text-gray-500 ml-auto">
                                                {item.percent}%
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">
                                            Total Projects
                                        </p>
                                        <p className="text-2xl font-bold text-gray-900">
                                            {totalProjects}
                                        </p>
                                    </div>
                                    <div className="p-3 bg-blue-100 rounded-full">
                                        <svg
                                            className="w-6 h-6 text-blue-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">
                                            Current Bids
                                        </p>
                                        <p className="text-2xl font-bold text-gray-900">
                                            {currentBids}
                                        </p>
                                    </div>
                                    <div className="p-3 bg-green-100 rounded-full">
                                        <svg
                                            className="w-6 h-6 text-green-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">
                                            Earnings
                                        </p>
                                        <p className="text-2xl font-bold text-gray-900">$2,450</p>
                                    </div>
                                    <div className="p-3 bg-purple-100 rounded-full">
                                        <svg
                                            className="w-6 h-6 text-purple-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Available Jobs */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">
                                Available Jobs
                            </h2>
                            <div className="space-y-6">
                                {jobs.map((job, index) => (
                                    <div
                                        key={index}
                                        className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-lg font-semibold text-gray-900">
                                                {job.title}
                                            </h3>
                                            <div className="flex items-center space-x-2">
                                                <span className="text-sm text-gray-600">
                                                    {job.proposals} proposals
                                                </span>
                                                <span className="text-sm text-green-600 font-medium">
                                                    {job.clientTrust}% trust
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 mb-4">{job.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {job.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex space-x-2">
                                                {job.photos.map((photo, photoIndex) => (
                                                    <div
                                                        key={photoIndex}
                                                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-600"
                                                    >
                                                        📷
                                                    </div>
                                                ))}
                                            </div>
                                            <button className="bg-primary-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors">
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Quick Actions */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                Quick Actions
                            </h3>
                            <div className="space-y-3">
                                <button className="w-full bg-primary-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-600 transition-colors">
                                    Post a Project
                                </button>
                                <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                                    Browse Jobs
                                </button>
                                <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                                    View Proposals
                                </button>
                                <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                                    Messages
                                </button>
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                Recent Activity
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg
                                            className="w-4 h-4 text-green-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">
                                            Project completed
                                        </p>
                                        <p className="text-xs text-gray-500">2 hours ago</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <svg
                                            className="w-4 h-4 text-blue-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">
                                            New message received
                                        </p>
                                        <p className="text-xs text-gray-500">1 day ago</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <svg
                                            className="w-4 h-4 text-purple-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">
                                            Proposal submitted
                                        </p>
                                        <p className="text-xs text-gray-500">2 days ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trust Score Tips */}
                        <div className="bg-purple-50 rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                Boost Your Trust Score
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs font-bold text-purple-700">1</span>
                                    </div>
                                    <p className="text-sm text-gray-700">
                                        Connect your GitHub account to verify your coding skills
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs font-bold text-purple-700">2</span>
                                    </div>
                                    <p className="text-sm text-gray-700">
                                        Complete more projects to build your reputation
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs font-bold text-purple-700">3</span>
                                    </div>
                                    <p className="text-sm text-gray-700">
                                        Stay active on the platform to increase your activity score
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 