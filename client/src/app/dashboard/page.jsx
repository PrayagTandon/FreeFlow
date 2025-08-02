"use client";
import { useState } from "react";

const trustBreakdown = [
    { color: "#FFB23F", label: "Default Trust", percent: 20 },
    { color: "#5B61F6", label: "Verified by GitHub", percent: 20 },
    { color: "#FF5B5B", label: "Email Verified", percent: 20 },
    { color: "#2AD4B7", label: "Phone Verified", percent: 20 },
    { color: "#A259FF", label: "Completed Projects", percent: 10 },
    { color: "#FFD600", label: "Activity", percent: 10 },
];

export default function Dashboard() {
    // Placeholder values (easy to replace with backend data)
    const trustScore = 100;
    const totalProjects = 5;
    const currentBids = 2;
    const newPostings = 7;
    const bids = [
        { project: "Blockchain Development", status: "Active", badge: "Active" },
        { project: "Smart Contract Audit", status: "Pending", badge: "Pending" },
    ];

    // Tooltip state for trust chart
    const [hoveredArc, setHoveredArc] = useState(null);

    // SVG arc math
    const radius = 84;
    const stroke = 18;
    const center = 100;
    const circumference = 2 * Math.PI * radius;
    let offset = 0;

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

                {/* Trust Score Card */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="flex-shrink-0">
                            <div className="relative w-48 h-48">
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
                                        stroke="#eee"
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
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Trust Score Breakdown
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {trustBreakdown.map((item, i) => (
                                    <div
                                        key={item.label}
                                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                        style={{
                                            opacity:
                                                hoveredArc === i || hoveredArc === null ? 1 : 0.3,
                                        }}
                                        onMouseEnter={() => setHoveredArc(i)}
                                        onMouseLeave={() => setHoveredArc(null)}
                                    >
                                        <div
                                            className="w-4 h-4 rounded-full"
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
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">
                                    Total Projects
                                </p>
                                <p className="text-3xl font-bold text-gray-900">
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
                                <p className="text-3xl font-bold text-gray-900">
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
                                    New Postings
                                </p>
                                <p className="text-3xl font-bold text-gray-900">
                                    {newPostings}
                                </p>
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
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Recent Activity
                    </h2>
                    <div className="space-y-4">
                        {bids.map((bid, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="p-2 bg-blue-100 rounded-full">
                                        <svg
                                            className="w-5 h-5 text-blue-600"
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
                                        <h3 className="font-semibold text-gray-900">
                                            {bid.project}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            Status: {bid.status}
                                        </p>
                                    </div>
                                </div>
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium ${bid.badge === "Active"
                                            ? "bg-green-100 text-green-800"
                                            : "bg-yellow-100 text-yellow-800"
                                        }`}
                                >
                                    {bid.badge}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
} 