'use client';
import Link from 'next/link';
import { FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#1C1C1E] flex items-center justify-center px-4 font-body">
      <div className="bg-[#2A2A2D] p-8 rounded-lg shadow-lg w-full max-w-md text-[#F3E4BE]">
        <h1 className="text-2xl font-headline mb-6 text-center">Welcome Back to MaatiMap</h1>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-[#1C1C1E] border border-[#F3E4BE] placeholder-[#ccc] focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-[#1C1C1E] border border-[#F3E4BE] placeholder-[#ccc] focus:outline-none"
          />
          <button
            type="submit"
            className="w-full py-2 bg-[#F3E4BE] text-[#1C1C1E] font-semibold rounded hover:bg-[#d8c293]"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 text-center space-y-3">
          <p className="text-sm">or continue with</p>
          <div className="flex justify-center gap-4 mt-2">
            <button className="p-3 rounded-full border border-[#F3E4BE] hover:bg-[#d8c293] hover:text-[#1C1C1E] transition-colors">
              <FaGoogle size={20} />
            </button>
            <button className="p-3 rounded-full border border-[#F3E4BE] hover:bg-[#d8c293] hover:text-[#1C1C1E] transition-colors">
              <FaFacebookF size={20} />
            </button>
            <button className="p-3 rounded-full border border-[#F3E4BE] hover:bg-[#d8c293] hover:text-[#1C1C1E] transition-colors">
              <FaApple size={20} />
            </button>
          </div>
        </div>

        <p className="text-sm text-center mt-6">
          Don’t have an account?{' '}
          <Link href="/auth/signup" className="underline hover:text-[#B08D57]">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
