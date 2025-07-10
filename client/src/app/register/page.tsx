"use client";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [role, setRole] = useState("Freelancer");
  const [wallet, setWallet] = useState("");
  const [connecting, setConnecting] = useState(false);

  async function connectWallet(e: React.MouseEvent) {
    e.preventDefault();
    if (typeof window !== "undefined" && (window as any).ethereum) {
      setConnecting(true);
      try {
        const accounts = await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });
        setWallet(accounts[0]);
      } catch (err) {
        alert("Could not connect to wallet.");
      }
      setConnecting(false);
    } else {
      alert("Metamask or a compatible wallet is not installed.");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border-4 border-orange-200">
        <h1 className="text-3xl font-bold text-orange-600 text-center mb-8">
          SignUp for a Free Account
        </h1>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
            required
          />

          <div className="flex items-center gap-6">
            <label className="font-medium text-gray-700">Role:</label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                value="Client"
                checked={role === "Client"}
                onChange={() => setRole("Client")}
                className="text-primary-600 focus:ring-primary-500"
              />
              Client
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                value="Freelancer"
                checked={role === "Freelancer"}
                onChange={() => setRole("Freelancer")}
                className="text-primary-600 focus:ring-primary-500"
              />
              Freelancer
            </label>
          </div>

          <div className="space-y-3">
            <input
              type="text"
              name="wallet"
              placeholder="Metamask Wallet ID"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
              value={wallet}
              readOnly
            />
            <button
              className="w-full bg-primary-500 text-white py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={connectWallet}
              disabled={connecting}
              type="button"
            >
              {connecting ? "Connecting..." : "Connect Wallet"}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Register
          </button>
        </form>
        <div className="text-center mt-6 space-y-2">
          <div className="text-gray-600">
            Already signed up?{" "}
            <Link
              href="/login"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Log in here.
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
