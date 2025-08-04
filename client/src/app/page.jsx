"use client";
// import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import GoToTop from "./components/GoToTop.jsx";

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
    const [selectedProfession, setSelectedProfession] = useState(null);
    const [howMode, setHowMode] = useState("Client");
    const [selectedStep, setSelectedStep] = useState(1); // default to center step
    const [faqOpen, setFaqOpen] = useState([]);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);
    const [howModalOpen, setHowModalOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState("freelancer");

    const steps = howMode === "Client" ? howItWorksClient : howItWorksFreelancer;

    return (
        <div className="min-h-screen bg-primary-bg-light">
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
                        </div>
                    </div>
                </div>
            )}

            {/* Contact Modal */}
            {contactOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
                        <button
                            className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-gray-700"
                            onClick={() => setContactOpen(false)}
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                Have questions or need support? We&apos;re here to help!
                            </p>
                            <div className="space-y-2">
                                <p><strong>Email:</strong> support@freeflow.com</p>
                                <p><strong>Discord:</strong> Join our community</p>
                                <p><strong>Twitter:</strong> @FreeFlowPlatform</p>
                            </div>
                        </div>
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
                        <div className="space-y-4 text-gray-700">
                            <div>
                                <h3 className="font-semibold mb-2">Getting Started</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>How to create your profile</li>
                                    <li>Setting up your wallet</li>
                                    <li>Posting your first project</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Best Practices</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Writing effective proposals</li>
                                    <li>Managing milestones</li>
                                    <li>Building reputation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <main className="min-h-screen">
            {/* Navigation */}
            <nav className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Link href="/" className="text-2xl font-bold text-primary-500">
                                FreeFlow
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <button
                                    onClick={() => setHowModalOpen(true)}
                                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    How It Works
                                </button>
                                <button
                                    onClick={() => setAboutOpen(true)}
                                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    About
                                </button>
                                <button
                                    onClick={() => setContactOpen(true)}
                                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Contact
                                </button>
                                <button
                                    onClick={() => setResourcesOpen(true)}
                                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Resources
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/login"
                                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Login
                            </Link>
                            <Link
                                href="/register"
                                className="bg-primary-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-600"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                The Future of{" "}
                                <span className="text-yellow-300">Freelancing</span>
                            </h1>
                            <p className="text-xl mb-8 text-gray-100">
                                Decentralized, secure, and fair. Connect with clients and
                                freelancers worldwide using blockchain-powered smart contracts.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => {
                                        setSelectedRole("client");
                                        router.push("/register");
                                    }}
                                    className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    Hire Talent
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedRole("freelancer");
                                        router.push("/register");
                                    }}
                                    className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
                                >
                                    Find Work
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/Hero_Img.jpg"
                                alt="Freelancing Platform"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
            </main>                        
            {/* Search Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Find the Perfect Match
                        </h2>
                        <p className="text-lg text-gray-600">
                            Browse thousands of projects and professionals across all categories
                        </p>
                    </div>
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for projects, skills, or professionals..."
                                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Popular Categories
                        </h2>
                        <p className="text-lg text-gray-600">
                            Explore our most in-demand professional services
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {professionData.map((profession, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                                onClick={() => setSelectedProfession(index)}
                            >
                                <div className="text-4xl mb-4">{profession.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {profession.name}
                                </h3>
                                <p className="text-gray-600">{profession.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            How It Works
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Simple, secure, and transparent process
                        </p>
                        <div className="flex justify-center space-x-4 mb-8">
                            <button
                                onClick={() => setHowMode("Client")}
                                className={`px-6 py-2 rounded-lg font-medium ${howMode === "Client"
                                        ? "bg-primary-500 text-white"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                            >
                                For Clients
                            </button>
                            <button
                                onClick={() => setHowMode("Freelancer")}
                                className={`px-6 py-2 rounded-lg font-medium ${howMode === "Freelancer"
                                        ? "bg-primary-500 text-white"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                            >
                                For Freelancers
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="text-center p-6 bg-gray-50 rounded-lg"
                            >
                                <div className="text-4xl mb-4">{step.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Everything you need to know about FreeFlow
                        </p>
                    </div>
                    <div className="space-y-4">
                        {faqData.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-sm border border-gray-200"
                            >
                                <button
                                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                                    onClick={() => {
                                        if (faqOpen.includes(index)) {
                                            setFaqOpen(faqOpen.filter((i) => i !== index));
                                        } else {
                                            setFaqOpen([...faqOpen, index]);
                                        }
                                    }}
                                >
                                    <span className="font-medium text-gray-900">{faq.q}</span>
                                    <span className="text-primary-500">
                                        {faqOpen.includes(index) ? "−" : "+"}
                                    </span>
                                </button>
                                {faqOpen.includes(index) && (
                                    <div className="px-6 pb-4">
                                        <p className="text-gray-600">{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary-500 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl mb-8 text-gray-100">
                        Join thousands of professionals and clients already using FreeFlow
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/register"
                            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Sign Up Now
                        </Link>
                        <Link
                            href="/login"
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">FreeFlow</h3>
                            <p className="text-gray-400">
                                The future of decentralized freelancing
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Platform</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <Link href="/" className="hover:text-white">
                                        How It Works
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="hover:text-white">
                                        Categories
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="hover:text-white">
                                        Pricing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Support</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <Link href="/" className="hover:text-white">
                                        Help Center
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="hover:text-white">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="hover:text-white">
                                        Community
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Legal</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <Link href="/" className="hover:text-white">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="hover:text-white">
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="hover:text-white">
                                        Cookie Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 FreeFlow. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            <GoToTop />
        </div>
    );
} 