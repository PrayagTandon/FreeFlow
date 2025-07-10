import Link from "next/link";
import Image from "next/image";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Log In to FreeFlow
        </h1>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
          >
            Log In with Email
          </button>
        </form>
        <div className="text-center my-6">
          <span className="text-gray-500">or</span>
        </div>
        <div className="space-y-3">
          <button className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors flex items-center justify-center gap-3">
            <Image
              src="/gmail.svg"
              alt="Gmail"
              className="w-6 h-6"
              width={24}
              height={24}
            />
            Log In with Gmail
          </button>
          <button className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors flex items-center justify-center gap-3">
            <Image
              src="/github.svg"
              alt="GitHub"
              className="w-6 h-6"
              width={24}
              height={24}
            />
            Log In with GitHub
          </button>
        </div>
        <div className="text-center mt-6 space-y-2">
          <div className="text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Sign up
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
