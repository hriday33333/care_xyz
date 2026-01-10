"use client";
import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-purple-50 flex flex-col items-center justify-center px-6 text-center">

      {/* 404 Visual / Animation Container */}
      <div className="relative mb-8">
        {/* Floating Effect for the 404 text */}
        <h1 className="font-fredoka text-[120px] md:text-[180px] font-bold text-primary/20 leading-none animate-pulse">
          404
        </h1>

        {/* Absolute positioned icon or character */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-full shadow-2xl animate-bounce">
            <Search className="w-16 h-16 text-pink-500" />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="max-w-md">
        <h2 className="font-fredoka text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable. Dont worry, our caregivers are still here!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg shadow-primary/20 active:scale-95"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 bg-white border-2 border-primary/20 hover:border-primary text-primary font-bold py-4 px-8 rounded-2xl transition-all active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full blur-3xl opacity-50 hidden md:block animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-50 hidden md:block animate-blob animation-delay-2000"></div>

      {/* Adding custom keyframes in a style tag for the blob animation */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: scale(1); }
          33% { transform: scale(1.1); }
          66% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
