"use client";
import '../home.css';
import { useState } from 'react';

const trustBreakdown = [
  { color: '#FFB23F', label: 'Default Trust', percent: 20 },
  { color: '#5B61F6', label: 'Verified by GitHub', percent: 20 },
  { color: '#FF5B5B', label: 'Email Verified', percent: 20 },
  { color: '#2AD4B7', label: 'Phone Verified', percent: 20 },
  { color: '#A259FF', label: 'Completed Projects', percent: 10 },
  { color: '#FFD600', label: 'Activity', percent: 10 },
];

export default function Dashboard() {
  // Placeholder values (easy to replace with backend data)
  const trustScore = 100;
  const totalProjects = 5;
  const currentBids = 2;
  const newPostings = 7;
  const bids = [
    { project: 'Blockchain Development', status: 'Active', badge: 'Active' },
    { project: 'Smart Contract Audit', status: 'Pending', badge: 'Pending' },
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
    <div className="dashboard-bg">
      <div className="dashboard-container dashboard-wide">
        <h1 className="dashboard-title small-title">Dashboard</h1>
        {/* Trust Score Card */}
        <div className="dashboard-card trust-score-card trust-score-wide">
          <div className="trust-score-left">
            <div className="trust-score-circle trust-score-circle-wide">
              <svg width="200" height="200" viewBox="0 0 200 200">
                <circle cx={center} cy={center} r={radius} stroke="#eee" strokeWidth={stroke} fill="none" />
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
                      style={{ cursor: 'pointer', opacity: hoveredArc === i || hoveredArc === null ? 1 : 0.3, transition: 'opacity 0.2s' }}
                      onMouseEnter={() => setHoveredArc(i)}
                      onMouseLeave={() => setHoveredArc(null)}
                    />
                  );
                  offset += arcLen;
                  return arc;
                })}
                <text x="100" y="98" textAnchor="middle" fontSize="2.1rem" fontWeight="900" fill="#4b2e83">{trustScore}%</text>
                <text x="100" y="125" textAnchor="middle" fontSize="1.05rem" fontWeight="700" fill="#5B61F6">Trust Score</text>
              </svg>
            </div>
          </div>
          <div className="trust-score-right trust-score-right-wide">
            <div className="trust-score-legend">
              {trustBreakdown.map((item, i) => (
                <div className="trust-legend-row" key={item.label} style={{ fontWeight: hoveredArc === i ? 700 : 500 }}>
                  <span className="trust-legend-dot" style={{ background: item.color, border: hoveredArc === i ? '2px solid #4b2e83' : 'none' }}></span>
                  <span className="trust-legend-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Stats Cards */}
        <div className="dashboard-stats-row">
          <div className="dashboard-stat-card">
            <div className="stat-title small-title">My Projects</div>
            <div className="stat-value">{totalProjects}</div>
            <div className="stat-desc">Total Projects</div>
          </div>
          <div className="dashboard-stat-card">
            <div className="stat-title small-title">Active Bids</div>
            <div className="stat-value">{currentBids}</div>
            <div className="stat-desc">Current Bids</div>
          </div>
          <div className="dashboard-stat-card">
            <div className="stat-title small-title">Postings added in the last 24 hours</div>
            <div className="stat-value">{newPostings}</div>
            <div className="stat-desc">New Postings</div>
          </div>
        </div>
        {/* My Bids Table */}
        <div className="dashboard-card bids-card">
          <div className="bids-title small-title">My Bids</div>
          <table className="bids-table">
            <thead>
              <tr>
                <th>Project</th>
                <th>Status</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((bid, i) => (
                <tr key={bid.project}>
                  <td>{bid.project}</td>
                  <td>{bid.status}</td>
                  <td>
                    <span className={`bid-badge ${bid.badge === 'Active' ? 'active' : 'pending'}`}>{bid.badge}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 