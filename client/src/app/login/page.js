import '../home.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Login() {
  return (
    <div className="register-page dark-gradient-bg">
      <div className="register-container">
        <h1 className="register-title">Log In to FreeFlow</h1>
        <form className="register-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required className="register-input" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required className="register-input" />
          <button type="submit" className="register-btn-main">Log In with Email</button>
        </form>
        <div className="register-or">or</div>
        <div className="register-socials">
          <button className="register-social-btn gmail-btn">
            <Image src="/gmail.svg" alt="Gmail" className="register-social-icon" width={24} height={24} /> Log In with Gmail
          </button>
          <button className="register-social-btn github-btn">
            <Image src="/github.svg" alt="GitHub" className="register-social-icon" width={24} height={24} /> Log In with GitHub
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