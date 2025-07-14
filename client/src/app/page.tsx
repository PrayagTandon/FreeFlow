"use client";
// import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const professionData = [
  {
    name: "Development & Coding",
    icon: "💻",
    desc: "Find top developers for web, mobile, and software projects. Expertise in all major programming languages and frameworks.",
  },
  {
    name: "Design & Creative",
    icon: "🎨",
    desc: "Hire creative designers for UI/UX, branding, illustration, and more. Bring your ideas to life with stunning visuals.",
  },
  {
    name: "Legal Services",
    icon: "⚖️",
    desc: "Get legal advice, contract drafting, and compliance help from experienced legal professionals.",
  },
  {
    name: "Content Development",
    icon: "✍️",
    desc: "Engage writers and editors for blogs, articles, copywriting, and content strategy.",
  },
  {
    name: "Accounting & Finance",
    icon: "💼",
    desc: "Find accountants and financial experts for bookkeeping, tax, and business planning.",
  },
  {
    name: "AI Services",
    icon: "🤖",
    desc: "Leverage AI specialists for machine learning, data science, and automation projects.",
  },
];

const howItWorksClient = [
  {
    icon: "🔍",
    title: "Post Projects",
    desc: "Discover projects that match your skills and interests.",
  },
  {
    icon: "✉️",
    title: "Connect with Freelancers",
    desc: "Communicate directly and build lasting relationships.",
  },
  {
    icon: "🏆",
    title: "Grow Your Reputation",
    desc: "Earn reviews and build your on-chain reputation.",
  },
];

const howItWorksFreelancer = [
  {
    icon: "📝",
    title: "Submit Proposals",
    desc: "Easily find projects and submit tailored proposals to clients.",
  },
  {
    icon: "🔒",
    title: "Work Securely",
    desc: "Start work with confidence using our trustless escrow system.",
  },
  {
    icon: "💸",
    title: "Get Paid Instantly",
    desc: "Receive crypto payments instantly upon project completion.",
  },
];

const faqData = [
  {
    q: "How does FreeFlow keep my funds safe?",
    a: "FreeFlow uses a trustless smart escrow system. Your funds are securely held until the work is completed and approved by both parties.",
  },
  {
    q: "What if there is a dispute?",
    a: "In case of a dispute, our decentralized resolution process ensures fairness and transparency for both clients and freelancers.",
  },
  {
    q: "Do I need crypto to get started?",
    a: "No, you can sign up and explore projects without crypto. You only need a wallet when youre ready to transact.",
  },
  {
    q: "Which wallets and blockchains are supported?",
    a: "We support all major wallets (like MetaMask, WalletConnect) and popular blockchains including Ethereum, Polygon, and more.",
  },
  {
    q: "Is there a membership or platform fee?",
    a: "There are no hidden fees. You only pay a small service fee per successful transaction.",
  },
];

export default function HomePage() {
  const router = useRouter();
  const [selectedProfession, setSelectedProfession] = useState<number | null>(
    null
  );
  const [howMode, setHowMode] = useState<string>("Client");
  const [selectedStep, setSelectedStep] = useState<number>(1); // default to center step
  const [faqOpen, setFaqOpen] = useState<number[]>([]);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [howModalOpen, setHowModalOpen] = useState(false);
   const [selectedRole, setSelectedRole] = useState("freelancer"); 

  const steps = howMode === "Client" ? howItWorksClient : howItWorksFreelancer;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* How It Works Modal */}
      {howModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-gray-700"
              onClick={() => setHowModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 mb-6">
              <strong>FreeFlow</strong> connects clients and freelancers using
              blockchain-powered smart contracts. Here&apos;s how it works:
            </p>
            <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
              <li>
                <strong>Post or Find Projects:</strong> Clients post jobs,
                freelancers browse and apply.
              </li>
              <li>
                <strong>Smart Escrow:</strong> Clients fund milestones,
                freelancers start work with confidence.
              </li>
              <li>
                <strong>Delivery & Payment:</strong> Work is delivered, funds
                are released instantly upon approval.
              </li>
              <li>
                <strong>Dispute Resolution:</strong> If needed, disputes are
                resolved transparently by the community.
              </li>
              <li>
                <strong>Reputation:</strong> Both parties build on-chain trust
                scores for future work.
              </li>
            </ol>
            <Link
              href="/"
              className="inline-block bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      )}

      {/* About Us Modal */}
      {aboutOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-gray-700"
              onClick={() => setAboutOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About Us</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>FreeFlow</strong> is reimagining the future of
                freelancing by putting control, trust, and fairness back into
                the hands of freelancers and clients.
              </p>
              <p>
                We believe that skilled professionals and employers deserve a
                platform where they can work together freely without high fees,
                restrictive rules, or centralized control. That&apos;s why we
                built <strong>FreeFlow</strong> as a{" "}
                <em>decentralized freelancing platform</em>, powered by
                blockchain technology.
              </p>
              <p>
                Instead of relying on middlemen, FreeFlow uses smart contracts
                to manage everything from job postings and milestone payments to
                dispute resolution. Freelancers get paid on time. Clients only
                release funds when work is delivered. And disputes are resolved
                transparently by the community or through decentralized courts.
              </p>
              <p>
                To help users build trust, we&apos;ve developed a{" "}
                <strong>Trust Score System</strong>. Freelancers and employers
                are rated based on job success, reviews, dispute history, and
                identity verification like GitHub, portfolio, or company email.
              </p>
              <p>
                What sets us apart is our{" "}
                <strong>community-first approach</strong>. FreeFlow is governed
                by its users—freelancers and clients who vote on how the
                platform grows, evolves, and operates.
              </p>
              <p className="italic">
                We&apos;re not just building a platform. We&apos;re building a
                fairer digital economy.
                <br />
                <strong>Welcome to FreeFlow.</strong> Work without barriers.
                Trust without borders.
              </p>
            </div>
            <Link
              href="/"
              className="inline-block bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors mt-6"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      )}

      {/* Contact Us Modal */}
      {contactOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-gray-700"
              onClick={() => setContactOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                At <strong>FreeFlow</strong>, we&apos;re proud to be a truly
                global team. With core developers and contributors based in{" "}
                <strong>India</strong>, <strong>Dubai</strong>, and{" "}
                <strong>Toronto</strong>, we&apos;re building a decentralized
                freelancing platform that supports talent across borders—because
                our mission is global by design.
              </p>
              <p>
                Whether you have a question, a partnership idea, or just want to
                connect, feel free to reach out to our regional teams below.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">📍 India</h4>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:india@freeflow.network"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      india@freeflow.network
                    </a>
                    <br />
                    Location: Mumbai{" "}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    📍 United Arab Emirates
                  </h4>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:dubai@freeflow.network"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      dubai@freeflow.network
                    </a>
                    <br />
                    Location: Dubai
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">📍 Canada</h4>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:toronto@freeflow.network"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      toronto@freeflow.network
                    </a>
                    <br />
                    Location: Toronto
                  </p>
                </div>
              </div>

              <p>
                For general inquiries, please email us at:{" "}
                <a
                  href="mailto:hello@freeflow.network"
                  className="text-primary-600 hover:text-primary-700"
                >
                  hello@freeflow.network
                </a>
              </p>
            </div>
            <Link
              href="/"
              className="inline-block bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors mt-6"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      )}

      {/* Resources Modal */}
      {resourcesOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-gray-700"
              onClick={() => setResourcesOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Resources</h2>
            <p className="text-gray-700 mb-6">
              Here are some helpful resources for getting started and making the
              most of FreeFlow:
            </p>
            <ul className="space-y-2 mb-6">
              <li>
                <a
                  href="#"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Getting Started Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Smart Contract Security
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Community Forum
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  API Documentation
                </a>
              </li>
            </ul>
            <Link
              href="/"
              className="inline-block bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      )}
      {/* Nav and Hero */}
      <main className="min-h-screen">
      {/* Navbar */}
      <nav className="w-full h-18 bg-gradient-1 text-offwhite px-12 py-4">
        <div className="mx-auto flex justify-between items-center">
          {/* Text */}
          <div className="flex items-center space-x-12">
            <span className="text-xl font-bold">Logo</span>
            <a
              className="transition-colors font-medium hover:text-white hover:underline"
              onClick={() => setHowModalOpen(true)}
            >
              How It Works ▾
            </a>
            <a className="transition-colors font-medium hover:text-white hover:underline">
              Search ▾
            </a>
            <a
              className="transition-colors font-medium hover:text-white hover:underline"
              onClick={() => setAboutOpen(true)}
            >
              About Us
            </a>
            <a
              className="transition-colors font-medium hover:text-white hover:underline"
              onClick={() => setContactOpen(true)}
            >
              Contact Us
            </a>
            <a
              className="transition-colors font-medium hover:text-white hover:underline"
              onClick={() => setResourcesOpen(true)}
            >
              Resources
            </a>
            <a className="transition-colors font-medium hover:text-white hover:underline">
              Pricing
            </a>
          </div>
          {/* Buttons */}
          <div className="flex items-center space-x-6">
            <a
              href="/login"
              className="btn--secondary text-color-black px-6 py-2 rounded-full font-semibold hover:bg-secondary-btn--hover transition-colors"
            >
              Log In
            </a>
            <a
              href="/register"
              className="btn--primary text-offwhite px-6 py-2 rounded-full font-semibold hover:bg-primary-btn--hover transition-colors"
            >
              Register
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[url(/Hero_Img.jpg)] bg-cover relative overflow-hidden rounded-2xl mx-32 my-8 shadow-2xl h-[calc(100vh-9rem)]">
      <div className="bg-[rgb(0,0,0,70%)] h-full">
        <div className="relative z-10 w-full h-full px-8 py-12 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-offwhite mb-8">
            <p className="leading-[4rem]">Work Without <span className="text-orange">Worry</span>. </p>
            <p className="leading-[3.5rem]">Get Paid with <span className="text-orange">Trust</span>.</p>
          </h1>
          <p className="w-1/3 text-md text-center leading-6 text-lightgrey mb-8 max-w-2xl">
            A blockchain-powered platform that enables secure payments and trust
            for freelance work. No middlemen. No surprises.
          </p>
          <div className="w-1/3 bg-gradient-1 py-10 px-6 rounded-2xl p-2 shadow-lg">
            {/* Buttons */}
            <div className="flex justify-center items-center mb-2">
                <button
                type="button"
                onClick={() => setSelectedRole("client")}
                className={`px-6 py-2 text-base font-medium border-none outline-none mb-6 rounded-l-xl transition-colors duration-200
                ${selectedRole === "client" ? "color-accent text-offwhite" : "color-Bg text-color-black"}`}
              >
                Client
              </button>

              <button
                type="button"
                onClick={() => setSelectedRole("freelancer")}
                className={`px-6 py-2 text-base font-medium border-none outline-none mb-6 rounded-r-xl transition-colors duration-200
                ${selectedRole === "freelancer" ? "color-accent text-offwhite" : "color-Bg text-color-black"}`}
              >
                Freelancer
              </button>
            </div>
            {/* Input */}
            <div className="relative">
              <input
                type="text"
                placeholder={
                  selectedRole === "freelancer"
                    ? "Search Jobs, Skills, Keywords"
                    : "Search Freelancers, Grow Reputation"
                }
                className="w-full flex-1 px-5 py-5 border-none outline-none rounded-xl text-gray-900 mb-6"
              />
            {/* Search button */}
            <button
              type="button" 
              className="absolute bottom-[40%] right-[2%] color-accent text-offwhite text-base px-4 py-2 rounded-xl font-semibold hover:color-primary transition-colors flex items-center gap-3">
                <FaSearch />
              <span>Search</span>
            </button>
            </div>
          </div>
        </div>
      </div>
      </section>
      </main>

      {/* Professions Section */}
      <section className="bg-yellow-50 my-24 rounded-2xl shadow-lg py-12 px-32 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-14">
          Explore Different{" "}
          <span className="text-secondary-orange">Professions</span>, Get Paid With{" "}
          <span className="text-secondary-orange">Trust</span>
        </h2>
        {/* Professions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {professionData.map((prof, idx) => (
            <div
              key={prof.name}
              className={`bg-white rounded-2xl shadow-md p-6 flex flex-col items-center cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-2 hover:border-primary-300 ${
                selectedProfession === idx
                  ? "bg-primary-500 text-white shadow-lg border-2 border-primary-500"
                  : "text-gray-700"
              }`}
              // onClick={() => {
              //   setSelectedProfession(idx);
              //   if (
              //     prof.name === "Development & Coding" ||
              //     prof.name === "Freelancer"
              //   ) {
              //     router.push("/freelancer-home");
              //   }
              // }}
              tabIndex={0}
              role="button"
              aria-pressed={selectedProfession === idx}
            >
              <div className="text-4xl mb-3" aria-hidden="true">
                {prof.icon}
              </div>
              <span className="font-semibold text-center">{prof.name}</span>
            </div>
          ))}
        </div>
        {selectedProfession !== null && (
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">
                {professionData[selectedProfession].icon}
              </span>
              <span className="text-xl font-bold text-gray-900">
                {professionData[selectedProfession].name}
              </span>
            </div>
            <p className="text-gray-700 text-left">
              {professionData[selectedProfession].desc}
            </p>
          </div>
        )}
      </section>

      {/* How It Works Section */}
      <section className="mx-8 my-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
            How It Works <span className="text-primary-500">&gt;</span>
          </h2>
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                howMode === "Client"
                  ? "bg-white text-primary-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => {
                setHowMode("Client");
                setSelectedStep(1);
              }}
            >
              Client
            </button>
            <button
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                howMode === "Freelancer"
                  ? "bg-white text-primary-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => {
                setHowMode("Freelancer");
                setSelectedStep(1);
              }}
            >
              Freelancer
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className={`bg-white rounded-2xl shadow-md p-6 text-center cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedStep === idx ? "ring-2 ring-primary-500 shadow-lg" : ""
              }`}
              onMouseEnter={() => setSelectedStep(idx)}
              onClick={() => setSelectedStep(idx)}
              tabIndex={0}
              role="button"
              aria-pressed={selectedStep === idx}
            >
              <div className="text-4xl mb-4" aria-hidden="true">
                {step.icon}
              </div>
              <div className="font-semibold text-gray-900 mb-3">
                {step.title}
              </div>
              {selectedStep === idx && (
                <button className="bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors">
                  Learn More
                </button>
              )}
            </div>
          ))}
        </div>

        {selectedStep !== null && (
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">{steps[selectedStep].icon}</span>
              <span className="text-xl font-bold text-gray-900">
                {steps[selectedStep].title}
              </span>
            </div>
            <p className="text-gray-700 text-left">
              {steps[selectedStep].desc}
            </p>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 mx-8 my-16 rounded-2xl p-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Designed For <span className="text-primary-600">Trust</span>. Built
            For The Future Of <span className="text-primary-600">Work</span>.
          </h2>
        </div>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="text-4xl flex-shrink-0">🤝</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Trustless Smart Escrow
              </h3>
              <p className="text-gray-700">
                Payments are held securely in escrow and released only when both
                parties are satisfied. No middlemen, no worries.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="text-4xl flex-shrink-0">💳</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Crypto-Native Payments
              </h3>
              <p className="text-gray-700">
                Get paid instantly and globally with crypto. No waiting, no
                borders, no hidden fees.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="text-4xl flex-shrink-0">🌟</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                On-Chain Reputation
              </h3>
              <p className="text-gray-700">
                Your work history and reviews are stored on-chain, making your
                reputation portable and verifiable anywhere.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="text-4xl flex-shrink-0">📜</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Verifiable Work History
              </h3>
              <p className="text-gray-700">
                Every project and review is recorded, giving you a transparent
                and trustworthy work portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 mx-8 my-16 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          FAQs
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, idx) => (
            <details
              key={faq.q}
              className={`bg-white rounded-xl shadow-md overflow-hidden ${
                faqOpen.includes(idx) ? "ring-2 ring-primary-500" : ""
              }`}
              open={faqOpen.includes(idx)}
              onClick={(e) => {
                e.preventDefault();
                setFaqOpen((open) =>
                  open.includes(idx)
                    ? open.filter((i) => i !== idx)
                    : [...open, idx]
                );
              }}
            >
              <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                {faq.q}
              </summary>
              <div className="px-6 pb-4 text-gray-700">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-secondary-900 to-primary-500 mx-8 my-16 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Find The Right Freelancer For Your Project
        </h2>
        <button className="bg-white text-secondary-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-200 transition-colors">
          Explore Freelancers
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="font-semibold text-lg mb-4">For Users</div>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  For Clients
                </a>
                <button
                  onClick={() => router.push("/freelancer-home")}
                  className="block text-gray-300 hover:text-white transition-colors text-left"
                >
                  For Freelancers
                </button>
                <button
                  onClick={() => router.push("/dashboard")}
                  className="block text-gray-300 hover:text-white transition-colors text-left"
                >
                  Help
                </button>
              </div>
            </div>
            <div>
              <div className="font-semibold text-lg mb-4">Company</div>
              <div className="space-y-2">
                <button
                  onClick={() => setAboutOpen(true)}
                  className="block text-gray-300 hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
                <button
                  onClick={() => setResourcesOpen(true)}
                  className="block text-gray-300 hover:text-white transition-colors text-left"
                >
                  Resources
                </button>
                <button
                  onClick={() => setContactOpen(true)}
                  className="block text-gray-300 hover:text-white transition-colors text-left"
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div>
              <div className="font-bold text-xl mb-4">FreeFlow</div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Image
                    src="/github.svg"
                    alt="GitHub"
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Image
                    src="/facebook.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Image src="/x.svg" alt="X" width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 py-6">
          <div className="max-w-7xl mx-auto px-8 text-center text-gray-400">
            © {new Date().getFullYear()} FreeFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
