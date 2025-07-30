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
  const [freelancer, setFreelancer] = useState<{
    id?: number;
    cognitoId?: string;
    name?: string;
    email?: string;
    metamaskId?: string;
  } | null>(null);
  const [hoveredArc, setHoveredArc] = useState<number | null>(null);
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
                    fill="#5B61F6"
                  >
                    Trust Score
                  </text>
                </svg>
              </div>
              <div className="ml-8">
                <div className="space-y-3">
                  {trustBreakdown.map((item, i) => (
                    <div
                      className="flex items-center gap-3"
                      key={item.label}
                      style={{ fontWeight: hoveredArc === i ? 700 : 500 }}
                    >
                      <span
                        className="w-4 h-4 rounded-full border-2"
                        style={{
                          background: item.color,
                          borderColor:
                            hoveredArc === i ? "#4b2e83" : "transparent",
                        }}
                      ></span>
                      <span className="text-gray-700">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="text-sm font-medium text-gray-500 mb-2">
                  My Projects
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  {totalProjects}
                </div>
                <div className="text-sm text-gray-500">Total Projects</div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="text-sm font-medium text-gray-500 mb-2">
                  Current Bids
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  {currentBids}
                </div>
                <div className="text-sm text-gray-500">Active Bids</div>
              </div>
            </div>

            {/* Jobs Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 md:mb-0">
                  Jobs you Might Like
                </h2>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <span className="px-4 py-2 bg-white text-primary-600 rounded-md font-medium shadow-sm">
                    Most Recent
                  </span>
                  <span className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                    Past Jobs
                  </span>
                  <span className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                    Saved Jobs
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                {jobs.map((job, idx) => (
                  <div
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                    key={idx}
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 md:mb-0">
                        {job.title}
                      </h3>
                      <button className="bg-primary-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors">
                        Send a Proposal
                      </button>
                    </div>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.tags.map((tag) => (
                        <span
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                      <span className="text-gray-600">
                        Proposals: <b>{job.proposals}</b>
                      </span>
                      <span className="text-gray-600">
                        Client Trust Score: <b>{job.clientTrust}</b>
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {job.photos.map((_, i) => (
                        <div
                          className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center"
                          key={i}
                        >
                          <span className="text-2xl">🖼️</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🧑‍💻</div>
              <div className="font-semibold text-gray-900 mb-2">
                {freelancer.name || "Freelancer"}
              </div>
              <div className="text-gray-600 mb-4">
                {freelancer.metamaskId || "N/A"}
              </div>
              <button className="bg-primary-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors">
                Upgrade your Profile
              </button>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 h-32"></div>
            <div className="bg-white rounded-2xl shadow-lg p-6 h-32"></div>
            <div className="bg-white rounded-2xl shadow-lg p-6 h-32"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="font-semibold text-lg mb-4">For Clients</div>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  For Clients
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  For Freelancers
                </a>
                <button
                  onClick={() => router.push("/dashboard")}
                  className="block text-gray-300 hover:text-white transition-colors text-left"
                >
                  Help
                </button>
              </div>
            </div>
            <div>
              <div className="font-semibold text-lg mb-4">Company</div>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div>
              <div className="font-bold text-xl mb-4">FreeFlow</div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Image
                    src="/github.svg"
                    alt="GitHub"
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Image
                    src="/facebook.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Image src="/x.svg" alt="X" width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 py-6">
          <div className="max-w-7xl mx-auto px-8 text-center text-gray-400">
            © {new Date().getFullYear()} FreeFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
