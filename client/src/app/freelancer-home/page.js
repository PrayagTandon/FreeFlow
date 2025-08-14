"use client";
import '../home.css';
import { useState, useEffect } from 'react';
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



export default function FreelancerHome() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [freelancerStats, setFreelancerStats] = useState({
    activejobs: 0,
    activebids: 0
  });
  const [availableJobs, setAvailableJobs] = useState([]);
  const [showProposalForm, setShowProposalForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [proposalData, setProposalData] = useState({
    coverLetter: '',
    proposedTimeline: '',
    timelineUnit: 'days'
  });
  const [submittingProposal, setSubmittingProposal] = useState(false);
  
  // Stats (now fetched from backend)
  const trustScore = 100;
  const totalProjects = 5;
  const [hoveredArc, setHoveredArc] = useState(null);
  
  // SVG arc math
  const radius = 84;
  const stroke = 18;
  const center = 100;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;
  const router = useRouter();

  useEffect(() => {
    checkUserAndRole();
  }, []);

  const checkUserAndRole = async () => {
    try {
      // Check if user is logged in
      const userData = localStorage.getItem('user');
      if (!userData) {
        console.log('No user data found, redirecting to login');
        router.push('/login');
        return;
      }

      const parsedUser = JSON.parse(userData);
      console.log('Current user:', parsedUser);

      // Check if user is a freelancer
      if (parsedUser.role !== 'Freelancer') {
        console.log('User is not a freelancer, logging out and redirecting to login');
        localStorage.removeItem('user');
        router.push('/login');
        return;
      }

      setUser(parsedUser);
      
      // Fetch freelancer stats from database
      await fetchFreelancerStats(parsedUser.metamaskid);
      
      // Fetch available jobs
      await fetchAvailableJobs();
      
    } catch (error) {
      console.error('Error checking user:', error);
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  const fetchFreelancerStats = async (metamaskId) => {
    try {
      // Fetch freelancer data from the database
      const response = await fetch('/api/get-freelancer-stats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ metamaskId }),
      });

      if (response.ok) {
        const data = await response.json();
        setFreelancerStats({
          activejobs: data.activejobs || 0,
          activebids: data.activebids || 0
        });
      } else {
        console.error('Failed to fetch freelancer stats');
      }
    } catch (error) {
      console.error('Error fetching freelancer stats:', error);
    }
  };

  const fetchAvailableJobs = async () => {
    try {
      const response = await fetch('/api/get-jobs');
      if (response.ok) {
        const data = await response.json();
        setAvailableJobs(data.jobs || []);
      } else {
        console.error('Failed to fetch available jobs');
      }
    } catch (error) {
      console.error('Error fetching available jobs:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  const handleSendProposal = (job) => {
    setSelectedJob(job);
    setShowProposalForm(true);
    setProposalData({
      coverLetter: '',
      proposedTimeline: '',
      timelineUnit: 'days'
    });
  };

  const handleProposalSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedJob) return;
    
    setSubmittingProposal(true);
    
    try {
      const response = await fetch('/api/submit-proposal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jobId: selectedJob.id,
          coverLetter: proposalData.coverLetter,
          budgetQuoted: selectedJob.budget || 0,
          proposedTimeline: `${proposalData.proposedTimeline} ${proposalData.timelineUnit}`,
          freelancerEmail: user.email,
          clientEmail: selectedJob.clientEmail
        }),
      });

      if (response.ok) {
        alert('Proposal submitted successfully!');
        setShowProposalForm(false);
        setSelectedJob(null);
        setProposalData({
          coverLetter: '',
          proposedTimeline: '',
          timelineUnit: 'days'
        });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error submitting proposal:', error);
      alert('Failed to submit proposal. Please try again.');
    } finally {
      setSubmittingProposal(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProposalData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.2rem',
        color: '#666'
      }}>
        Loading...
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="freelancer-home-bg">
      {/* Navbar */}
      <nav className="navbar gradient-bg">
        <div className="navbar-left">
          <span className="logo">Logo</span>
          <a href="#" className="nav-link">Find Jobs</a>
          <a href="#" className="nav-link">How It Works</a>
          <a href="#" className="nav-link">Proposals</a>
          <a href="#" className="nav-link">Messages</a>
        </div>
        <div className="navbar-right">
          <input className="nav-search" placeholder="Search" />
          <button className="nav-job-btn">Jobs ▾</button>
          <span className="nav-avatar">🧑‍💻</span>
          <button 
            onClick={handleLogout}
            style={{
              background: 'none',
              border: '1px solid white',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginLeft: '10px'
            }}
          >
            Logout
          </button>
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
              <div className="stat-value">{freelancerStats.activejobs}</div>
              <div className="stat-desc">Active Projects</div>
            </div>
            <div className="dashboard-stat-card">
              <div className="stat-title small-title">Active Bids</div>
              <div className="stat-value">{freelancerStats.activebids}</div>
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
              {availableJobs.length > 0 ? (
                availableJobs.map((job, idx) => (
                  <div className="job-card" key={idx}>
                                      <div className="job-title-row">
                    <span className="job-title">{job.title}</span>
                    <button 
                      className="job-proposal-btn"
                      onClick={() => handleSendProposal(job)}
                    >
                      Send a Proposal
                    </button>
                  </div>
                    <div className="job-desc">{job.description}</div>
                    <div className="job-tags-row">
                      {job.tags && job.tags.map((tag, tagIdx) => (
                        <span className="job-tag" key={tagIdx}>{tag}</span>
                      ))}
                    </div>
                    <div className="job-meta-row">
                      <span className="job-meta">Company: <b>{job.companyName || 'Not specified'}</b></span>
                      <span className="job-meta">Budget: <b>${job.budget || 'Not specified'}</b></span>
                    </div>
                    <div className="job-meta-row">
                      <span className="job-meta">Location: <b>{job.location || 'Remote'}</b></span>
                      <span className="job-meta">Level: <b>{job.jobLevel || 'Not specified'}</b></span>
                    </div>
                    {job.photoUrls && job.photoUrls.length > 0 && (
                      <div className="job-photos-row">
                        {job.photoUrls.map((_, i) => (
                          <div className="job-photo" key={i}> <span className="job-photo-placeholder">🖼️</span> </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
                  No jobs available at the moment. Check back later!
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="freelancer-home-right">
          <div className="profile-card">
            <div className="profile-avatar">🧑‍💻</div>
            <div className="profile-name">{user.name}</div>
            <div className="profile-wallet">{user.metamaskid || 'No wallet connected'}</div>
            <button className="profile-upgrade-btn">Upgrade your Profile</button>
          </div>
          <div className="sidebar-card"></div>
          <div className="sidebar-card"></div>
          <div className="sidebar-card"></div>
        </div>
      </div>

      {/* Proposal Submission Modal */}
      {showProposalForm && selectedJob && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '8px',
            width: '90%',
            maxWidth: '600px',
            maxHeight: '90vh',
            overflow: 'auto'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <h2 style={{ margin: 0, color: '#333' }}>Submit Proposal</h2>
              <button
                onClick={() => setShowProposalForm(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: '#666'
                }}
              >
                ×
              </button>
            </div>

            <div style={{ marginBottom: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '4px' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>{selectedJob.title}</h3>
              <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                {selectedJob.description.substring(0, 100)}...
              </p>
              <div style={{ marginTop: '0.5rem', padding: '0.5rem', background: '#e9ecef', borderRadius: '4px' }}>
                <strong>Budget: ${selectedJob.budget || 'Not specified'}</strong>
              </div>
            </div>

            <form onSubmit={handleProposalSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Cover Letter *
                </label>
                <textarea
                  name="coverLetter"
                  value={proposalData.coverLetter}
                  onChange={handleInputChange}
                  placeholder="Explain how your experience aligns with this job and any relevant information that would help the client choose you..."
                  rows={6}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Job Budget (USD)
                </label>
                <div style={{
                  padding: '0.75rem',
                  background: '#f8f9fa',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  color: '#333',
                  fontWeight: 'bold'
                }}>
                  ${selectedJob.budget || 'Not specified'}
                </div>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.875rem', color: '#666' }}>
                  This is the budget set by the client for this job.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Proposed Timeline *
                </label>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <input
                    type="number"
                    name="proposedTimeline"
                    value={proposalData.proposedTimeline}
                    onChange={handleInputChange}
                    placeholder="e.g., 30"
                    required
                    min="1"
                    style={{
                      flex: 1,
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontSize: '1rem'
                    }}
                  />
                  <select
                    name="timelineUnit"
                    value={proposalData.timelineUnit}
                    onChange={handleInputChange}
                    style={{
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontSize: '1rem',
                      minWidth: '100px'
                    }}
                  >
                    <option value="days">Days</option>
                    <option value="weeks">Weeks</option>
                    <option value="months">Months</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={() => setShowProposalForm(false)}
                  style={{
                    background: '#6c757d',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '4px',
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submittingProposal}
                  className="job-proposal-btn"
                  style={{
                    background: submittingProposal ? '#6c757d' : '#007bff',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '4px',
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: submittingProposal ? 'not-allowed' : 'pointer'
                  }}
                >
                  {submittingProposal ? 'Submitting...' : 'Submit Proposal'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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