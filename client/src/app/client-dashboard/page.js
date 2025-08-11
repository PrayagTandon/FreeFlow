"use client";
import '../home.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function ClientDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showProposalForm, setShowProposalForm] = useState(false);
  const [proposalData, setProposalData] = useState({
    name: '',
    description: '',
    tags: '',
    location: '',
    jobLevel: '',
    budget: '',
    qualificationsPreferred: '',
    validTill: '',
    companyName: '',
    photoUrl: ''
  });
  const [proposals, setProposals] = useState([]);
  const [loadingProposals, setLoadingProposals] = useState(false);

  // Stats (will be calculated from real data)
  const totalProjects = proposals.length;
  const activeProposals = proposals.filter(p => p.status === 'Active').length;
  const completedProjects = proposals.filter(p => p.status === 'Completed').length;

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      console.log('User data from localStorage:', parsedUser); // Debug log
      setUser(parsedUser);
      
      // If user is not a client, redirect to appropriate dashboard
      if (parsedUser.role !== 'Client') {
        if (parsedUser.role === 'Freelancer') {
          router.push('/freelancer-home');
        } else {
          router.push('/dashboard');
        }
        return;
      }
      
      // Fetch user's proposals
      fetchProposals(parsedUser.id);
    } else {
      // No user data, redirect to login
      router.push('/login');
      return;
    }
    setLoading(false);
  }, [router]);

  const fetchProposals = async (clientId) => {
    setLoadingProposals(true);
    try {
      const response = await fetch(`/api/post-proposal?clientId=${clientId}`);
      if (response.ok) {
        const data = await response.json();
        setProposals(data.proposals || []);
      } else {
        console.error('Failed to fetch proposals');
      }
    } catch (error) {
      console.error('Error fetching proposals:', error);
    } finally {
      setLoadingProposals(false);
    }
  };

  const refreshUserData = async (email) => {
    try {
      // Try to get fresh user data from the server
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: 'dummy' }) // We'll handle this differently
      });
      
      if (response.ok) {
        const data = await response.json();
        // Update localStorage with fresh data
        localStorage.setItem('user', JSON.stringify(data.user));
        setUser(data.user);
        console.log('User data refreshed from server');
      }
    } catch (error) {
      console.error('Failed to refresh user data:', error);
    }
  };

  const handleProposalSubmit = async (e) => {
    e.preventDefault();
    
    try {
             const response = await fetch('/api/post-proposal', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           ...proposalData,
           contractToHire: true, // Always true for active status
           customizable: true, // Always true
           clientId: user.id,
           clientEmail: user.email
         }),
       });

      const data = await response.json();

      if (response.ok) {
        // Close form and reset data
        setShowProposalForm(false);
                 setProposalData({
           name: '',
           description: '',
           tags: '',
           location: '',
           jobLevel: '',
           budget: '',
           qualificationsPreferred: '',
           validTill: '',
           companyName: '',
           photoUrl: ''
         });
        
        // Refresh proposals list
        fetchProposals(user.id);
        
        // Show success message
        alert('Proposal posted successfully!');
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error posting proposal:', error);
      alert('Failed to post proposal. Please try again.');
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
          <a href="#" className="nav-link">Find Freelancers</a>
          <a href="#" className="nav-link">How It Works</a>
          <a href="#" className="nav-link">My Proposals</a>
          <a href="#" className="nav-link">Messages</a>
        </div>
        <div className="navbar-right">
          <input className="nav-search" placeholder="Search freelancers" />
          <button className="nav-job-btn">Freelancers ▾</button>
          <span className="nav-avatar">👔</span>
        </div>
      </nav>

      <div className="freelancer-home-main">
        {/* Left Column */}
        <div className="freelancer-home-left">
          {/* Post New Proposal Section */}
          <div className="dashboard-card" style={{ background: '#f8f9fa', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0, color: '#333' }}>Post New Proposal</h3>
              <button 
                className="job-proposal-btn"
                onClick={() => setShowProposalForm(!showProposalForm)}
                style={{ background: showProposalForm ? '#dc3545' : '#007bff' }}
              >
                {showProposalForm ? 'Cancel' : 'Post Proposal'}
              </button>
            </div>
            
            {showProposalForm && (
              <form onSubmit={handleProposalSubmit} style={{ marginTop: '1rem' }}>
                                 <div style={{ marginBottom: '1rem' }}>
                   <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                     Job Title *
                   </label>
                   <input
                     type="text"
                     name="name"
                     value={proposalData.name}
                     onChange={handleInputChange}
                     placeholder="e.g., Senior React Developer, Smart Contract Auditor"
                     required
                     style={{
                       width: '100%',
                       padding: '0.75rem',
                       border: '1px solid #ddd',
                       borderRadius: '4px',
                       fontSize: '1rem'
                     }}
                   />
                 </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Project Description *
                  </label>
                  <textarea
                    name="description"
                    value={proposalData.description}
                    onChange={handleInputChange}
                    placeholder="Describe your project requirements, goals, and any specific details..."
                    required
                    rows={4}
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
                    Skills/Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={proposalData.tags}
                    onChange={handleInputChange}
                    placeholder="e.g., React, Solidity, UI/UX, Smart Contracts"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={proposalData.location}
                      onChange={handleInputChange}
                      placeholder="e.g., Remote, New York, London"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                      Job Level
                    </label>
                    <select
                      name="jobLevel"
                      value={proposalData.jobLevel}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '1rem'
                      }}
                    >
                      <option value="">Select Job Level</option>
                      <option value="Entry">Entry Level</option>
                      <option value="Mid">Mid Level</option>
                      <option value="Senior">Senior Level</option>
                      <option value="Lead">Lead</option>
                      <option value="Manager">Manager</option>
                    </select>
                  </div>
                </div>

                                 <div style={{ marginBottom: '1rem' }}>
                   <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                     Company Name
                   </label>
                   <input
                     type="text"
                     name="companyName"
                     value={proposalData.companyName}
                     onChange={handleInputChange}
                     placeholder="e.g., TechCorp Inc."
                     style={{
                       width: '100%',
                       padding: '0.75rem',
                       border: '1px solid #ddd',
                       borderRadius: '4px',
                       fontSize: '1rem'
                     }}
                   />
                 </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Qualifications Preferred
                  </label>
                  <textarea
                    name="qualificationsPreferred"
                    value={proposalData.qualificationsPreferred}
                    onChange={handleInputChange}
                    placeholder="e.g., Bachelor's degree in Computer Science, 3+ years experience..."
                    rows={3}
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
                    Photo URLs (comma-separated)
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    value={proposalData.photoUrl}
                    onChange={handleInputChange}
                    placeholder="e.g., https://example.com/photo1.jpg, https://example.com/photo2.jpg"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                      Budget (USD)
                    </label>
                    <input
                      type="number"
                      name="budget"
                      value={proposalData.budget}
                      onChange={handleInputChange}
                      placeholder="e.g., 5000"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                      Valid Till
                    </label>
                    <input
                      type="date"
                      name="validTill"
                      value={proposalData.validTill}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="job-proposal-btn"
                  style={{ 
                    width: '100%', 
                    background: '#28a745',
                    border: 'none',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Post Proposal
                </button>
              </form>
            )}
          </div>

          {/* Stats Row */}
          <div className="dashboard-stats-row freelancer-stats-row">
            <div className="dashboard-stat-card">
              <div className="stat-title small-title">Total Projects</div>
              <div className="stat-value">{totalProjects}</div>
              <div className="stat-desc">All Time</div>
            </div>
            <div className="dashboard-stat-card">
              <div className="stat-title small-title">Active Proposals</div>
              <div className="stat-value">{activeProposals}</div>
              <div className="stat-desc">Currently Open</div>
            </div>
            <div className="dashboard-stat-card">
              <div className="stat-title small-title">Completed</div>
              <div className="stat-value">{completedProjects}</div>
              <div className="stat-desc">Successfully Done</div>
            </div>
          </div>

          {/* My Proposals Section */}
          <div className="jobs-section">
            <div className="jobs-header">
              <span className="jobs-title">My Proposals</span>
              <div className="jobs-tabs">
                <span className="jobs-tab active">Active</span>
                <span className="jobs-tab">In Progress</span>
                <span className="jobs-tab">Completed</span>
              </div>
            </div>
            <div className="jobs-list">
              {loadingProposals ? (
                <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
                  Loading proposals...
                </div>
              ) : proposals.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
                  No proposals yet. Post your first proposal to get started!
                </div>
              ) : (
                proposals.map((proposal) => (
                  <div className="job-card" key={proposal.id}>
                                                       <div className="job-title-row">
                   <span className="job-title">{proposal.name}</span>
                   <span className="job-status" style={{ 
                     background: '#28a745',
                     color: 'white',
                     padding: '0.25rem 0.75rem', 
                     borderRadius: '20px', 
                     fontSize: '0.875rem' 
                   }}>
                     Active
                   </span>
                 </div>
                  <div className="job-desc">{proposal.description}</div>
                  
                  {/* Company and Location */}
                  {(proposal.companyName || proposal.location) && (
                    <div style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
                      {proposal.companyName && <span style={{ marginRight: '1rem' }}>🏢 {proposal.companyName}</span>}
                      {proposal.location && <span>📍 {proposal.location}</span>}
                    </div>
                  )}

                  {/* Job Level and Contract Type */}
                  {(proposal.jobLevel || proposal.contractToHire !== undefined) && (
                    <div style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
                      {proposal.jobLevel && <span style={{ marginRight: '1rem' }}>📊 {proposal.jobLevel}</span>}
                      {proposal.contractToHire !== undefined && (
                        <span>{proposal.contractToHire ? '🔄 Contract to Hire' : '⏱️ Contract Only'}</span>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  {proposal.tags && Array.isArray(proposal.tags) && proposal.tags.length > 0 && (
                    <div className="job-tags-row">
                      {proposal.tags.map((tag, index) => (
                        <span className="job-tag" key={index}>{tag.trim()}</span>
                      ))}
                    </div>
                  )}

                  {/* Qualifications */}
                  {proposal.qualificationsPreferred && (
                    <div style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
                      <strong>Qualifications:</strong> {proposal.qualificationsPreferred}
                    </div>
                  )}

                                   {/* Meta Information */}
                 <div className="job-meta-row">
                   {proposal.budget && (
                     <span className="job-meta">Budget: <b>${proposal.budget}</b></span>
                   )}
                   {proposal.validTill && (
                     <span className="job-meta">Valid Till: <b>{new Date(proposal.validTill).toLocaleDateString()}</b></span>
                   )}
                 </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="freelancer-home-right">
          <div className="profile-card" style={{ background: '#ffffff', border: '1px solid #e9ecef' }}>
            <div className="profile-avatar">👔</div>
            <div className="profile-name" style={{ color: '#333' }}>{user.name}</div>
            <div className="profile-wallet" style={{ color: '#666' }}>
              {(() => {
                const walletAddress = user.metamaskid || user.metamask || user.wallet;
                if (walletAddress && walletAddress !== 'No wallet connected') {
                  if (walletAddress.length > 10) {
                    return `${walletAddress.substring(0, 5)}...${walletAddress.substring(walletAddress.length - 5)}`;
                  }
                  return walletAddress;
                }
                return 'No wallet connected';
              })()}
            </div>
            <button className="profile-upgrade-btn">Upgrade your Profile</button>
          </div>
          
          <div className="sidebar-card" style={{ background: '#f8f9fa', border: '1px solid #e9ecef' }}>
            <h4 style={{ margin: '0 0 1rem 0', color: '#333' }}>Quick Actions</h4>
            <button 
              className="job-proposal-btn" 
              style={{ width: '100%', marginBottom: '0.5rem' }}
              onClick={() => setShowProposalForm(true)}
            >
              Post New Proposal
            </button>
            <button className="job-proposal-btn" style={{ width: '100%', marginBottom: '0.5rem', background: '#6c757d' }}>
              View Applications
            </button>
            <button className="job-proposal-btn" style={{ width: '100%', background: '#17a2b8' }}>
              Message Freelancers
            </button>
          </div>
          
          <div className="sidebar-card" style={{ background: '#f8f9fa', border: '1px solid #e9ecef' }}>
            <h4 style={{ margin: '0 0 1rem 0', color: '#333' }}>Recent Activity</h4>
            <div style={{ fontSize: '0.875rem', color: '#495057' }}>
              <div style={{ marginBottom: '0.5rem' }}>• New proposal received</div>
              <div style={{ marginBottom: '0.5rem' }}>• Project milestone completed</div>
              <div style={{ marginBottom: '0.5rem' }}>• Payment processed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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