"use client";
import '../home.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const trustBreakdown = [
  { color: '#FFB23F', label: 'Default Trust', percent: 20 },
  { color: '#5B61F6', label: 'Verified by GitHub', percent: 20 },
  { color: '#FF5B5B', label: 'Email Verified', percent: 20 },
  { color: '#2AD4B7', label: 'Phone Verified', percent: 20 },
  { color: '#A259FF', label: 'Completed Projects', percent: 10 },
  { color: '#FFD600', label: 'Activity', percent: 10 },
];

const jobs = [
  {
    title: 'Website Development',
    description: 'Build a modern, responsive website for a tech startup. Requires experience with React, Next.js, and UI/UX best practices. Deliver a landing page, blog, and contact form integrated with backend APIs.',
    tags: ['Web', 'React', 'Next.js', 'UI/UX', 'API'],
    proposals: 3,
    clientTrust: 92,
    photos: [1, 2, 3, 4],
  },
  {
    title: 'DeFi Smart Contract Development',
    description: 'Develop and audit a DeFi smart contract for a new protocol. Must have experience with Solidity, security best practices, and deploying to Ethereum testnets. Prior DeFi project experience preferred.',
    tags: ['DeFi', 'Solidity', 'Smart Contracts', 'Audit', 'Ethereum'],
    proposals: 5,
    clientTrust: 88,
    photos: [1, 2, 3, 4],
  },
];

export default function FreelancerHome() {
  // Stats (easy to connect to backend)
  const trustScore = 100;
  const totalProjects = 5;
  const currentBids = 2;
  const [hoveredArc, setHoveredArc] = useState(null);
  // SVG arc math
  const radius = 84;
  const stroke = 18;
  const center = 100;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;
  const router = useRouter();

  return (
    <div className="freelancer-home-bg">
      {/* Navbar (placeholder, you can extract to a component) */}
      <nav className="navbar gradient-bg">
        <div className="navbar-left">
          <span className="logo">Logo</span>
          <a href="#" className="nav-link">Find Jobs</a>
          <a href="#" className="nav-link">How It Works</a>
          <a href="#" className="nav-link">Proposals</a>
          <Link href="/chat" className="nav-link">Messages</Link>
        </div>
        <div className="navbar-right">
          <input className="nav-search" placeholder="Search" />
          <button className="nav-job-btn">Jobs ▾</button>
          <span className="nav-avatar">🧑‍💻</span>
        </div>
      </nav>
      <div className="freelancer-home-main">
        {/* Left Column */}
        <div className="freelancer-home-left">
          {/* Carousel (Trust Score) */}
          <div className="carousel-card dashboard-card" style={{ background: '#ede7fa', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '1.5rem 2rem' }}>
            <div className="trust-score-circle trust-score-circle-wide" style={{ background: 'none', minWidth: 160, minHeight: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="200" height="200" viewBox="0 0 200 200">
                <circle cx={center} cy={center} r={radius} stroke="#ede7fa" strokeWidth={stroke} fill="none" />
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
            <div className="trust-score-right trust-score-right-wide" style={{ marginLeft: 32 }}>
              <div className="trust-score-legend">
                {trustBreakdown.map((item, i) => (
                  <div className="trust-legend-row" key={item.label} style={{ fontWeight: hoveredArc === i ? 700 : 500, display: 'flex', alignItems: 'center', marginBottom: 6 }}>
                    <span className="trust-legend-dot" style={{ background: item.color, border: hoveredArc === i ? '2px solid #4b2e83' : 'none', width: 14, height: 14, borderRadius: '50%', display: 'inline-block', marginRight: 8 }}></span>
                    <span className="trust-legend-label" style={{ color: '#4b2e83', fontSize: '1rem' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Stats Row */}
          <div className="dashboard-stats-row freelancer-stats-row">
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
          </div>
          {/* Jobs You Might Like */}
          <div className="jobs-section">
            <div className="jobs-header">
              <span className="jobs-title">Jobs you Might Like</span>
              <div className="jobs-tabs">
                <span className="jobs-tab active">Most Recent</span>
                <span className="jobs-tab">Past Jobs</span>
                <span className="jobs-tab">Saved Jobs</span>
              </div>
            </div>
            <div className="jobs-list">
              {jobs.map((job, idx) => (
                <div className="job-card" key={idx}>
                  <div className="job-title-row">
                    <span className="job-title">{job.title}</span>
                    <button className="job-proposal-btn">Send a Proposal</button>
                  </div>
                  <div className="job-desc">{job.description}</div>
                  <div className="job-tags-row">
                    {job.tags.map(tag => (
                      <span className="job-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="job-meta-row">
                    <span className="job-meta">Proposals: <b>{job.proposals}</b></span>
                    <span className="job-meta">Client Trust Score: <b>{job.clientTrust}</b></span>
                  </div>
                  <div className="job-photos-row">
                    {job.photos.map((_, i) => (
                      <div className="job-photo" key={i}> <span className="job-photo-placeholder">🖼️</span> </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="freelancer-home-right">
          <div className="profile-card">
            <div className="profile-avatar">🧑‍💻</div>
            <div className="profile-name">Name</div>
            <div className="profile-wallet">Metamask ID</div>
            <button className="profile-upgrade-btn">Upgrade your Profile</button>
          </div>
          <div className="sidebar-card"></div>
          <div className="sidebar-card"></div>
          <div className="sidebar-card"></div>
        </div>
      </div>
      {/* Footer (reuse from homepage) */}
      <footer className="footer improved-footer-gradient">
        <div className="footer-main">
          <div className="footer-links-group">
            <div className="footer-links-title">For Clients</div>
            <a href="#">For Clients</a>
            <a href="#">For Freelancers</a>
            <a href="#" onClick={e => { e.preventDefault(); router.push('/dashboard'); }}>Help</a>
          </div>
          <div className="footer-links-group">
            <div className="footer-links-title">Company</div>
            <a href="#">About Us</a>
            <a href="#">Resources</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="footer-logo-group">
            <span className="footer-logo">photo</span>
            <div className="footer-social">
              <a href="#" className="footer-social-icon"> <Image src="/github.svg" alt="GitHub" width={28} height={28} /> </a>
              <a href="#" className="footer-social-icon"> <Image src="/linkedin.svg" alt="LinkedIn" width={28} height={28} /> </a>
              <a href="#" className="footer-social-icon"> <Image src="/facebook.svg" alt="Facebook" width={28} height={28} /> </a>
              <a href="#" className="footer-social-icon"> <Image src="/x.svg" alt="X" width={28} height={28} /> </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} FreeFlow. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
} 