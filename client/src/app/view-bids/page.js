"use client";
import '../home.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ViewBids() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bids, setBids] = useState([]);
  const [loadingBids, setLoadingBids] = useState(false);

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

      // Check if user is a client
      if (parsedUser.role !== 'Client') {
        console.log('User is not a client, redirecting to appropriate dashboard');
        if (parsedUser.role === 'Freelancer') {
          router.push('/freelancer-home');
        } else {
          router.push('/dashboard');
        }
        return;
      }

      setUser(parsedUser);
      
      // Fetch bids for the client's jobs
      await fetchBids(parsedUser.metamaskid);
      
    } catch (error) {
      console.error('Error checking user:', error);
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  const fetchBids = async (clientId) => {
    setLoadingBids(true);
    try {
      // For now, we'll show a placeholder since we don't have a bids table yet
      // This would typically fetch from a bids/proposals table
      console.log('Fetching bids for client:', clientId);
      
      // Placeholder data - replace with actual API call when bids system is implemented
      setBids([
        {
          id: 1,
          jobTitle: 'Sample Job',
          freelancerName: 'John Doe',
          freelancerEmail: 'john@example.com',
          bidAmount: 5000,
          proposal: 'I have extensive experience in this field and can deliver high-quality results...',
          submittedAt: '2024-01-15',
          status: 'Pending'
        }
      ]);
      
    } catch (error) {
      console.error('Error fetching bids:', error);
    } finally {
      setLoadingBids(false);
    }
  };

  const handleBackToDashboard = () => {
    router.push('/client-dashboard');
  };

  const handleAcceptBid = (bidId) => {
    // TODO: Implement bid acceptance logic
    console.log('Accepting bid:', bidId);
    alert('Bid acceptance functionality will be implemented soon!');
  };

  const handleRejectBid = (bidId) => {
    // TODO: Implement bid rejection logic
    console.log('Rejecting bid:', bidId);
    alert('Bid rejection functionality will be implemented soon!');
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
          <button 
            onClick={handleBackToDashboard}
            style={{
              background: 'none',
              border: '1px solid white',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '10px'
            }}
          >
            ← Back to Dashboard
          </button>
        </div>
        <div className="navbar-right">
          <span className="nav-avatar">👔</span>
        </div>
      </nav>

      <div className="freelancer-home-main">
        {/* Main Content */}
        <div className="freelancer-home-left" style={{ width: '100%' }}>
          {/* Header */}
          <div className="dashboard-card" style={{ marginBottom: '2rem' }}>
            <h1 style={{ margin: '0 0 1rem 0', color: '#333' }}>Freelancer Bids</h1>
            <p style={{ margin: 0, color: '#666' }}>
              Review and manage bids submitted by freelancers for your job postings.
            </p>
          </div>

          {/* Bids List */}
          <div className="jobs-section">
            <div className="jobs-header">
              <span className="jobs-title">Received Bids</span>
            </div>
            
            <div className="jobs-list">
              {loadingBids ? (
                <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
                  Loading bids...
                </div>
              ) : bids.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📭</div>
                  <h3 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>No Bids Yet</h3>
                  <p style={{ margin: 0, color: '#666' }}>
                    You haven't received any bids on your job postings yet. 
                    Make sure your jobs are visible and attractive to freelancers.
                  </p>
                </div>
              ) : (
                bids.map((bid) => (
                  <div className="job-card" key={bid.id}>
                    <div className="job-title-row">
                      <span className="job-title">{bid.jobTitle}</span>
                      <span className="job-status" style={{ 
                        background: bid.status === 'Pending' ? '#ffc107' : 
                                   bid.status === 'Accepted' ? '#28a745' : '#dc3545',
                        color: 'white',
                        padding: '0.25rem 0.75rem', 
                        borderRadius: '20px', 
                        fontSize: '0.875rem' 
                      }}>
                        {bid.status}
                      </span>
                    </div>
                    
                    <div style={{ marginBottom: '1rem' }}>
                      <strong>Freelancer:</strong> {bid.freelancerName}
                    </div>
                    
                    <div style={{ marginBottom: '1rem' }}>
                      <strong>Bid Amount:</strong> ${bid.bidAmount}
                    </div>
                    
                    <div style={{ marginBottom: '1rem' }}>
                      <strong>Proposal:</strong>
                      <p style={{ margin: '0.5rem 0 0 0', color: '#666', lineHeight: '1.5' }}>
                        {bid.proposal}
                      </p>
                    </div>
                    
                    <div style={{ marginBottom: '1rem', fontSize: '0.9rem', color: '#666' }}>
                      <strong>Submitted:</strong> {new Date(bid.submittedAt).toLocaleDateString()}
                    </div>
                    
                    {bid.status === 'Pending' && (
                      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <button 
                          className="job-proposal-btn"
                          onClick={() => handleAcceptBid(bid.id)}
                          style={{
                            background: '#28a745',
                            border: 'none',
                            padding: '0.5rem 1rem',
                            borderRadius: '4px',
                            color: 'white',
                            fontSize: '0.875rem',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                          }}
                        >
                          Accept Bid
                        </button>
                        <button 
                          className="job-proposal-btn"
                          onClick={() => handleRejectBid(bid.id)}
                          style={{
                            background: '#dc3545',
                            border: 'none',
                            padding: '0.5rem 1rem',
                            borderRadius: '4px',
                            color: 'white',
                            fontSize: '0.875rem',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                          }}
                        >
                          Reject Bid
                        </button>
                      </div>
                    )}
                  </div>
                ))
              )}
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
              <a href="#" className="footer-social-icon">📧</a>
              <a href="#" className="footer-social-icon">🔗</a>
              <a href="#" className="footer-social-icon">📘</a>
              <a href="#" className="footer-social-icon">🐦</a>
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