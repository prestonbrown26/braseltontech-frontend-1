'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console for debugging
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#f0f6ff] to-[#a7c7ff]">
      <NavBar />
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border border-blue-100 text-center">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Something went wrong!</h1>
          <p className="text-gray-600 mb-6">
            We&apos;re sorry, but there was an error loading this page.
          </p>
          
          {process.env.NODE_ENV === 'development' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded text-left overflow-auto max-h-60">
              <p className="font-mono text-red-700 text-sm whitespace-pre-wrap">
                {error.message}
                {error.stack && `\n\n${error.stack}`}
              </p>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="bg-blue-700 text-white font-bold py-2 px-6 rounded-md shadow hover:bg-blue-800 transition"
            >
              Try again
            </button>
            <Link 
              href="/"
              className="bg-gray-100 text-gray-700 font-bold py-2 px-6 rounded-md shadow hover:bg-gray-200 transition"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 