"use client";
import './home.css';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import GoToTop from './components/GoToTop';

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
  const router = useRouter();
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [howMode, setHowMode] = useState('Client');
  const [selectedStep, setSelectedStep] = useState(1); // default to center step
  const [faqOpen, setFaqOpen] = useState([]);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [howModalOpen, setHowModalOpen] = useState(false);

  const steps = howMode === 'Client' ? howItWorksClient : howItWorksFreelancer;

  return (
    <div className="homepage-container">
      {/* How It Works Modal */}
      {howModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setHowModalOpen(false)}>&times;</button>
            <h2>How It Works</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong>FreeFlow</strong> connects clients and freelancers using blockchain-powered smart contracts. Here&apos;s how it works:
            </p>
            <ol style={{ marginBottom: '1.5rem', paddingLeft: '1.2rem' }}>
              <li><strong>Post or Find Projects:</strong> Clients post jobs, freelancers browse and apply.</li>
              <li><strong>Smart Escrow:</strong> Clients fund milestones, freelancers start work with confidence.</li>
              <li><strong>Delivery & Payment:</strong> Work is delivered, funds are released instantly upon approval.</li>
              <li><strong>Dispute Resolution:</strong> If needed, disputes are resolved transparently by the community.</li>
              <li><strong>Reputation:</strong> Both parties build on-chain trust scores for future work.</li>
            </ol>
            <Link href="/" className="modal-link">Go to Homepage</Link>
          </div>
        </div>
      )}
      {/* About Us Modal */}
      {aboutOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setAboutOpen(false)}>&times;</button>
            <h2>About Us</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong>FreeFlow</strong> is reimagining the future of freelancing by putting control, trust, and fairness back into the hands of freelancers and clients.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              We believe that skilled professionals and employers deserve a platform where they can work together freely without high fees, restrictive rules, or centralized control. That&apos;s why we built <strong>FreeFlow</strong> as a <em>decentralized freelancing platform</em>, powered by blockchain technology.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              Instead of relying on middlemen, FreeFlow uses smart contracts to manage everything from job postings and milestone payments to dispute resolution. Freelancers get paid on time. Clients only release funds when work is delivered. And disputes are resolved transparently by the community or through decentralized courts.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              To help users build trust, we&apos;ve developed a <strong>Trust Score System</strong>. Freelancers and employers are rated based on job success, reviews, dispute history, and identity verification like GitHub, portfolio, or company email.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              What sets us apart is our <strong>community-first approach</strong>. FreeFlow is governed by its users—freelancers and clients who vote on how the platform grows, evolves, and operates.
            </p>

            <p style={{ marginBottom: '2rem' }}>
              <em>We&apos;re not just building a platform. We&apos;re building a fairer digital economy.</em>
              <br />
              <strong>Welcome to FreeFlow.</strong> Work without barriers. Trust without borders.
            </p>

            <Link href="/" className="modal-link">Go to Homepage</Link>
          </div>
        </div>
      )}
      {/* Contact Us Modal */}
      {contactOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setContactOpen(false)}>&times;</button>
            <h2>Contact Us</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              At <strong>FreeFlow</strong>, we&apos;re proud to be a truly global team. With core developers and contributors based in <strong>India</strong>, <strong>Dubai</strong>, and <strong>Toronto</strong>, we&apos;re building a decentralized freelancing platform that supports talent across borders—because our mission is global by design.
            </p>

            <p style={{ marginBottom: '2rem' }}>
              Whether you have a question, a partnership idea, or just want to connect, feel free to reach out to our regional teams below.
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h4>📍 India</h4>
              <p>Email: <a href="mailto:india@freeflow.network">india@freeflow.network</a><br />
                 Location: Mumbai  </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4>📍 United Arab Emirates</h4>
              <p>Email: <a href="mailto:dubai@freeflow.network">dubai@freeflow.network</a><br />
                 Location: Dubai</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4>📍 Canada</h4>
              <p>Email: <a href="mailto:toronto@freeflow.network">toronto@freeflow.network</a><br />
                 Location:  Toronto</p>
            </div>

            <p style={{ marginBottom: '2rem' }}>
              For general inquiries, please email us at: <a href="mailto:hello@freeflow.network">hello@freeflow.network</a>
            </p> <Link href="/" className="modal-link">Go to Homepage</Link>
          </div>
        </div>
      )}
      {/* Resources Modal */}
      {resourcesOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setResourcesOpen(false)}>&times;</button>
            <h2>Resources</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Here are some helpful resources for getting started and making the most of FreeFlow:
            </p>
            <ul style={{ marginBottom: '2rem', paddingLeft: '1.2rem' }}>
              <li><a href="#" className="modal-link">Getting Started Guide</a></li>
              <li><a href="#" className="modal-link">Smart Contract Security</a></li>
              <li><a href="#" className="modal-link">Community Forum</a></li>
              <li><a href="#" className="modal-link">API Documentation</a></li>
            </ul>
            <Link href="/" className="modal-link">Go to Homepage</Link>
          </div>
        </div>
      )}
      <main className='h-screen'>
      {/* Navbar */}
      <nav className="navbar gradient-bg h-16">
        <div className="navbar-left">
          <span className="logo text-primary-off-white">Logo</span>
          <a href="#" className="nav-link text-primary-off-white" onClick={e => { e.preventDefault(); setHowModalOpen(true); }}>How It Works ▾</a>
          <a href="#" className="nav-link text-primary-off-white" onClick={e => e.preventDefault()}>Search ▾</a>
          <a href="#" className="nav-link text-primary-off-white" onClick={e => { e.preventDefault(); setAboutOpen(true); }}>About Us</a>
          <a href="#" className="nav-link text-primary-off-white" onClick={e => { e.preventDefault(); setContactOpen(true); }}>Contact Us</a>
          <a href="#" className="nav-link text-primary-off-white" onClick={e => { e.preventDefault(); setResourcesOpen(true); }}>Resources</a>
          <a href="#" className="nav-link text-primary-off-white">Pricing</a>
        </div>
        <div className="navbar-right">
          <Link href="/login" className="login-btn bg-primary-off-white font-semibold">Log In</Link>
          <Link href="/register" className="register-btn font-semibold bg-secondary-orange">Register</Link>
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
      </main>
      {/* Professions Section */}
      <section className="professions-section">
        <h2>Explore Different <span className="highlight">Professions</span>, Get Paid With <span className="highlight">Trust</span></h2>
        <div className="professions-grid">
          {professionData.map((prof, idx) => (
            <div
              key={prof.name}
              className={`profession-card${selectedProfession === idx ? ' prof-card-highlight' : ''}`}
              onClick={() => {
                setSelectedProfession(idx);
                if (prof.name === 'Development & Coding' || prof.name === 'Freelancer') {
                  router.push('/freelancer-home');
                }
              }}
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
            <a href="#" onClick={e => { e.preventDefault(); router.push('/freelancer-home'); }}>For Freelancers</a>
            <a href="#" onClick={e => { e.preventDefault(); router.push('/dashboard'); }}>Help</a>
          </div>
          <div className="footer-links-group">
            <div className="footer-links-title">Company</div>
            <a href="#" onClick={e => { e.preventDefault(); setAboutOpen(true); }}>About Us</a>
            <a href="#" onClick={e => { e.preventDefault(); setResourcesOpen(true); }}>Resources</a>
            <a href="#" onClick={e => { e.preventDefault(); setContactOpen(true); }}>Contact Us</a>
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
      <GoToTop />
    </div>
  );
}
