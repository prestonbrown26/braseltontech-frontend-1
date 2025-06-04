import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#f0f6ff] to-[#a7c7ff]">
      <NavBar />
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border border-blue-100 text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-700 mb-6"></div>
            <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Loading...</h1>
            <p className="text-gray-600">
              Please wait while we prepare your content.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 