"use client";
import '../home.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    // Validation
    if (!email || !password) {
      setError('Email and password are required');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Login successful! Redirecting...');
        // Store user data in localStorage for session management
        localStorage.setItem('user', JSON.stringify(data.user));
        
        // Redirect based on user role
        setTimeout(() => {
          if (data.user.role === 'Freelancer') {
            router.push('/freelancer-home');
          } else if (data.user.role === 'Client') {
            router.push('/client-dashboard');
          } else {
            router.push('/dashboard');
          }
        }, 1500);
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="register-page dark-gradient-bg">
      <div className="register-container">
        <h1 className="register-title">Log In to FreeFlow</h1>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required className="register-input" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required className="register-input" />
          <button type="submit" className="register-btn-main" disabled={loading}>
            {loading ? 'Logging in...' : 'Log In with Email'}
          </button>
        </form>
        <div className="register-or">or</div>
        <div className="register-socials">
          <button className="register-social-btn gmail-btn">
            <Image src="/gmail.svg" alt="Gmail" width={24} height={24} className="register-social-icon" /> Log In with Gmail
          </button>
          <button className="register-social-btn github-btn">
            <Image src="/github.svg" alt="GitHub" width={24} height={24} className="register-social-icon" /> Log In with GitHub
          </button>
        </div>
        <div className="register-login-link">
          Don&apos;t have an account? <Link href="/register">Sign up</Link>
          <br />
          <Link href="/">Back to Homepage</Link>
        </div>
      </div>
    </div>
  );
} 