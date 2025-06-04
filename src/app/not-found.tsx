import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#f0f6ff] to-[#a7c7ff]">
      <NavBar />
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border border-blue-100 text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6">404</h1>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <Link 
            href="/"
            className="bg-blue-700 text-white font-bold py-2 px-6 rounded-md shadow hover:bg-blue-800 transition inline-block"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
} 