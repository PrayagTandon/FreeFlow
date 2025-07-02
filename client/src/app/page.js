"use client";
import './home.css';
import Link from 'next/link';
import { useState } from 'react';

const professionData = [
  {
    name: 'Development & Coding',
    icon: '💻',
    desc: 'Find top developers for web, mobile, and software projects. Expertise in all major programming languages and frameworks.'
  },
  {
    name: 'Design & Creative',
    icon: '🎨',
    desc: 'Hire creative designers for UI/UX, branding, illustration, and more. Bring your ideas to life with stunning visuals.'
  },
  {
    name: 'Legal Services',
    icon: '⚖️',
    desc: 'Get legal advice, contract drafting, and compliance help from experienced legal professionals.'
  },
  {
    name: 'Content Development',
    icon: '✍️',
    desc: 'Engage writers and editors for blogs, articles, copywriting, and content strategy.'
  },
  {
    name: 'Accounting & Finance',
    icon: '💼',
    desc: 'Find accountants and financial experts for bookkeeping, tax, and business planning.'
  },
  {
    name: 'AI Services',
    icon: '🤖',
    desc: 'Leverage AI specialists for machine learning, data science, and automation projects.'
  },
];

const howItWorksClient = [
  { icon: '🔍', title: 'Post Projects', desc: 'Discover projects that match your skills and interests.' },
  { icon: '✉️', title: 'Connect with Freelancers', desc: 'Communicate directly and build lasting relationships.' },
  { icon: '🏆', title: 'Grow Your Reputation', desc: 'Earn reviews and build your on-chain reputation.' }
];

const howItWorksFreelancer = [
  { icon: '📝', title: 'Submit Proposals', desc: 'Easily find projects and submit tailored proposals to clients.' },
  { icon: '🔒', title: 'Work Securely', desc: 'Start work with confidence using our trustless escrow system.' },
  { icon: '💸', title: 'Get Paid Instantly', desc: 'Receive crypto payments instantly upon project completion.' }
];

const faqData = [
  {
    q: 'How does FreeFlow keep my funds safe?',
    a: 'FreeFlow uses a trustless smart escrow system. Your funds are securely held until the work is completed and approved by both parties.'
  },
  {
    q: 'What if there is a dispute?',
    a: 'In case of a dispute, our decentralized resolution process ensures fairness and transparency for both clients and freelancers.'
  },
  {
    q: 'Do I need crypto to get started?',
    a: 'No, you can sign up and explore projects without crypto. You only need a wallet when youre ready to transact.'
  },
  {
    q: 'Which wallets and blockchains are supported?',
    a: 'We support all major wallets (like MetaMask, WalletConnect) and popular blockchains including Ethereum, Polygon, and more.'
  },
  {
    q: 'Is there a membership or platform fee?',
    a: 'There are no hidden fees. You only pay a small service fee per successful transaction.'
  },
];

export default function HomePage() {
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [howMode, setHowMode] = useState('Client');
  const [selectedStep, setSelectedStep] = useState(1); // default to center step
  const [faqOpen, setFaqOpen] = useState([]);

  const steps = howMode === 'Client' ? howItWorksClient : howItWorksFreelancer;

  return (
    <div className="homepage-container">
      {/* Navbar */}
      <nav className="navbar gradient-bg">
        <div className="navbar-left">
          <span className="logo">Logo</span>
          <a href="#" className="nav-link">How It Works ▾</a>
          <a href="#" className="nav-link">Search ▾</a>
          <a href="#" className="nav-link">Why Us</a>
          <a href="#" className="nav-link">Contact Us</a>
          <a href="#" className="nav-link">Pricing</a>
        </div>
        <div className="navbar-right">
          <Link href="/login" className="login-btn">Log In</Link>
          <Link href="/register" className="register-btn">Register</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section dark-gradient-bg">
        <div className="hero-content">
          <h1>Work Without <span className="highlight">Worry</span>.<br/>Get Paid with <span className="highlight">Trust</span>.</h1>
          <p className="hero-sub">A blockchain-powered platform that enables secure payments and trust for freelance work. No middlemen. No surprises.</p>
          <div className="hero-search-bar">
            <input type="text" placeholder="Search Jobs, Skills, Keywords" className="hero-search-input" />
            <select className="hero-search-select"><option>Client</option><option>Freelancer</option></select>
            <button className="hero-search-btn">Search</button>
          </div>
        </div>
      </section>

      {/* Professions Section */}
      <section className="professions-section">
        <h2>Explore Different <span className="highlight">Professions</span>, Get Paid With <span className="highlight">Trust</span></h2>
        <div className="professions-grid">
          {professionData.map((prof, idx) => (
            <div
              key={prof.name}
              className={`profession-card${selectedProfession === idx ? ' prof-card-highlight' : ''}`}
              onClick={() => setSelectedProfession(idx)}
              tabIndex={0}
              role="button"
              aria-pressed={selectedProfession === idx}
            >
              <div className="prof-icon" aria-hidden="true">{prof.icon}</div>
              <span>{prof.name}</span>
            </div>
          ))}
        </div>
        <div className={`profession-desc-expand${selectedProfession !== null ? ' show' : ''}`}>
          {selectedProfession !== null && (
            <div className="profession-desc-content">
              <span className="prof-desc-icon">{professionData[selectedProfession].icon}</span>
              <span className="prof-desc-title">{professionData[selectedProfession].name}</span>
              <p className="prof-desc-text">{professionData[selectedProfession].desc}</p>
            </div>
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="how-header">
          <h2>How It Works <span className="how-arrow">&gt;</span></h2>
          <div className="how-toggle">
            <button className={`how-btn${howMode === 'Client' ? ' active' : ''}`} onClick={() => { setHowMode('Client'); setSelectedStep(1); }}>Client</button>
            <button className={`how-btn${howMode === 'Freelancer' ? ' active' : ''}`} onClick={() => { setHowMode('Freelancer'); setSelectedStep(1); }}>Freelancer</button>
          </div>
        </div>
        <div className="how-steps icons-only">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className={`how-step-card icon-only${selectedStep === idx ? ' how-step-center' : ''}`}
              onMouseEnter={() => setSelectedStep(idx)}
              onClick={() => setSelectedStep(idx)}
              tabIndex={0}
              role="button"
              aria-pressed={selectedStep === idx}
            >
              <div className="how-step-icon" aria-hidden="true">{step.icon}</div>
              <div className="how-step-title">{step.title}</div>
              {/* Only show Learn More on selected */}
              {selectedStep === idx && (
                <button className="how-learn-btn">Learn More</button>
              )}
            </div>
          ))}
        </div>
        {/* Expanded details for selected step */}
        <div className={`how-step-desc-expand${selectedStep !== null ? ' show' : ''}`}>
          {selectedStep !== null && (
            <div className="how-step-desc-content">
              <span className="how-step-desc-icon">{steps[selectedStep].icon}</span>
              <span className="how-step-desc-title">{steps[selectedStep].title}</span>
              <p className="how-step-desc-text">{steps[selectedStep].desc}</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section improved-features-gradient">
        <div className="features-header">
          <span className="features-why">WHY CHOOSE US</span>
          <h2>Designed For <span className="highlight">Trust</span>. Built For The Future Of <span className="highlight">Work</span>.</h2>
        </div>
        <div className="features-list">
          <div className="feature-row">
            <div className="feature-icon feature-emoji">🤝</div>
            <div className="feature-text">
              <h3>Trustless Smart Escrow</h3>
              <p>Payments are held securely in escrow and released only when both parties are satisfied. No middlemen, no worries.</p>
            </div>
          </div>
          <div className="feature-row">
            <div className="feature-icon feature-emoji">💳</div>
            <div className="feature-text">
              <h3>Crypto-Native Payments</h3>
              <p>Get paid instantly and globally with crypto. No waiting, no borders, no hidden fees.</p>
            </div>
          </div>
          <div className="feature-row">
            <div className="feature-icon feature-emoji">🌟</div>
            <div className="feature-text">
              <h3>On-Chain Reputation</h3>
              <p>Your work history and reviews are stored on-chain, making your reputation portable and verifiable anywhere.</p>
            </div>
          </div>
          <div className="feature-row">
            <div className="feature-icon feature-emoji">📜</div>
            <div className="feature-text">
              <h3>Verifiable Work History</h3>
              <p>Every project and review is recorded, giving you a transparent and trustworthy work portfolio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section improved-faq-gradient">
        <h2 className="faq-title">FAQs</h2>
        <div className="faq-list">
          {faqData.map((faq, idx) => (
            <details
              key={faq.q}
              className={`faq-item improved-faq${faqOpen.includes(idx) ? ' open' : ''}`}
              open={faqOpen.includes(idx)}
              onClick={e => {
                e.preventDefault();
                setFaqOpen(open => open.includes(idx)
                  ? open.filter(i => i !== idx)
                  : [...open, idx]
                );
              }}
            >
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section gradient-bg">
        <h2 className="cta-title">Find The Right Freelancer For Your Project</h2>
        <button className="cta-btn cta-btn-large">Explore Freelancers</button>
      </section>

      {/* Footer */}
      <footer className="footer improved-footer-gradient">
        <div className="footer-main">
          <div className="footer-links-group">
            <div className="footer-links-title">For Users</div>
            <a href="#">For Clients</a>
            <a href="#">For Freelancers</a>
            <a href="#">Help</a>
          </div>
          <div className="footer-links-group">
            <div className="footer-links-title">Company</div>
            <a href="#">About Us</a>
            <a href="#">Resources</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="footer-logo-group">
            <span className="footer-logo">FreeFlow</span>
            <div className="footer-social">
              <a href="#" className="footer-social-icon"> <img src="/github.svg" alt="GitHub" /> </a>
              <a href="#" className="footer-social-icon"> <img src="/linkedin.svg" alt="LinkedIn" /> </a>
              <a href="#" className="footer-social-icon"> <img src="/facebook.svg" alt="Facebook" /> </a>
              <a href="#" className="footer-social-icon"> <img src="/x.svg" alt="X" /> </a>
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
