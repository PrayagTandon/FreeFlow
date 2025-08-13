"use client";
import '../home.css';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  const [role, setRole] = useState('Freelancer');
  const [wallet, setWallet] = useState('');
  const [connecting, setConnecting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  async function connectWallet(e) {
    e.preventDefault();
    if (typeof window !== 'undefined' && window.ethereum) {
      setConnecting(true);
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWallet(accounts[0]);
      } catch (err) {
        setError('Could not connect to wallet.');
      }
      setConnecting(false);
    } else {
      setError('Metamask or a compatible wallet is not installed.');
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const formData = new FormData(e.target);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    // Validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }

    try {
      console.log('Sending registration request:', {
        firstName,
        lastName,
        email,
        role,
        wallet: wallet || 'not provided'
      });

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          role,
          wallet
        }),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      let data;
      try {
        data = await response.json();
        console.log('Response data:', data);
      } catch (parseError) {
        console.error('Failed to parse response:', parseError);
        setError('Invalid response from server');
        setLoading(false);
        return;
      }

      if (response.ok) {
        setSuccess('Registration successful! Redirecting to login...');
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      } else {
        console.error('Registration failed:', data);
        setError(data.error || data.details || 'Registration failed');
      }
    } catch (err) {
      console.error('Network error:', err);
      setError(`Network error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="register-page orange-border-bg">
      <div className="register-container orange-border-box">
        <h1 className="register-title orange-text">SignUp for a Free Account</h1>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-row">
            <input type="text" name="firstName" placeholder="First Name" className="register-input half" required />
            <input type="text" name="lastName" placeholder="Last Name" className="register-input half" required />
          </div>
          <input type="email" name="email" placeholder="Email" className="register-input" required />
          <input type="password" name="password" placeholder="Create Password" className="register-input" required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" className="register-input" required />
          <div className="register-row role-row">
            <label className="role-label">Role:</label>
            <label className="role-radio">
              <input type="radio" name="role" value="Client" checked={role === 'Client'} onChange={() => setRole('Client')} /> Client
            </label>
            <label className="role-radio">
              <input type="radio" name="role" value="Freelancer" checked={role === 'Freelancer'} onChange={() => setRole('Freelancer')} /> Freelancer
            </label>
          </div>
          <div className="register-row wallet-row">
            <input type="text" name="wallet" placeholder="Metamask Wallet ID" className="register-input wallet-input" value={wallet} readOnly />
            <button className="connect-wallet-btn" onClick={connectWallet} disabled={connecting} type="button">
              {connecting ? 'Connecting...' : 'Connect Wallet'}
            </button>
          </div>
          <button type="submit" className="register-btn-main orange-btn" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        <div className="register-login-link">
          Already signed up? <Link href="/login">Log in here.</Link>
          <br />
          <Link href="/">Back to Homepage</Link>
        </div>
      </div>
    </div>
  );
} 