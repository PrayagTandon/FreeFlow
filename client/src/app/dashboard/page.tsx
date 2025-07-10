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
  const [hoveredArc, setHoveredArc] = useState<number | null>(null);

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
                    fill="#5B61F6"
                  >
                    Trust Score
                  </text>
                </svg>
              </div>
            </div>

            <div className="flex-1">
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
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
              Active Bids
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {currentBids}
            </div>
            <div className="text-sm text-gray-500">Current Bids</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="text-sm font-medium text-gray-500 mb-2">
              Postings added in the last 24 hours
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {newPostings}
            </div>
            <div className="text-sm text-gray-500">New Postings</div>
          </div>
        </div>

        {/* My Bids Table */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="text-xl font-bold text-gray-900 mb-6">My Bids</div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Project
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {bids.map((bid, i) => (
                  <tr key={bid.project} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">{bid.project}</td>
                    <td className="py-3 px-4 text-gray-600">{bid.status}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          bid.badge === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {bid.badge}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
