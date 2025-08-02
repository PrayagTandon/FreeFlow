"use client";
import '../home.css';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Register() {
  const [role, setRole] = useState('Freelancer');
  const [wallet, setWallet] = useState('');
  const [connecting, setConnecting] = useState(false);

  async function connectWallet(e) {
    e.preventDefault();
    if (typeof window !== 'undefined' && window.ethereum) {
      setConnecting(true);
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWallet(accounts[0]);
      } catch (err) {
        alert('Could not connect to wallet.');
      }
      setConnecting(false);
    } else {
      alert('Metamask or a compatible wallet is not installed.');
    }
  }

  return (
    <div className="register-page orange-border-bg">
      <div className="register-container orange-border-box">
        <h1 className="register-title orange-text">SignUp for a Free Account</h1>
        <form className="register-form">
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
          <button type="submit" className="register-btn-main orange-btn">Register</button>
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