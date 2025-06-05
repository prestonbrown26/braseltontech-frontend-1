"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { API_ENDPOINTS } from "@/lib/api";
import { setToken, clearToken } from "@/lib/auth";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get('from') || '/admin/';
  const authError = searchParams.get('auth');

  // Always clear existing tokens on login page load to prevent issues
  useEffect(() => {
    // Clear any stored tokens to start fresh
    clearToken();
    
    // Show appropriate error message
    if (authError === 'failed') {
      setError('Your session has expired. Please log in again.');
    }
    
    console.log('Login page loaded, tokens cleared');
  }, [authError]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      console.log('Attempting login with:', form.email);
      
      // Use the CORS-enabled endpoint for cross-domain login
      console.log('Using CORS-enabled login endpoint');
      
      const response = await axios.post(
        API_ENDPOINTS.adminLoginCors,
        { username: form.email, password: form.password },
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );
      
      if (response.data && response.data.access) {
        console.log('Login successful, token received');
        
        // Store token in localStorage only - NO cookies
        setToken(response.data.access);
        
        // Give a small delay for localStorage to be set
        setTimeout(() => {
          console.log('Redirecting to:', from);
          router.push(from);
        }, 100);
      } else {
        console.error('Invalid response from server:', response.data);
        setError('Invalid response from server. Please try again.');
      }
    } catch (error) {
      console.error("Login error:", error);
      
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Server response error:', error.response.status);
          // Handle specific error responses
          if (error.response.status === 401) {
            setError('Invalid email or password');
          } else if (error.response.status === 403) {
            setError('Access forbidden. CSRF or CORS issue detected.');
          } else if (error.response.status === 404) {
            setError('Login service not available. Please check backend connection.');
          } else {
            setError(`Login failed: ${error.response.status} - ${error.response.statusText}`);
          }
        } else if (error.request) {
          console.error('No response received');
          setError('No response from server. Please check your internet connection.');
        } else {
          setError('Login failed. Please try again later.');
        }
      } else {
        setError('Invalid email or password');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#f0f6ff] to-[#a7c7ff]">
      <NavBar />
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Admin Login</h1>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            {error && <div className="text-red-600 text-center text-sm font-semibold">{error}</div>}
            <button
              type="submit"
              disabled={loading}
              className={`bg-[#5b8ee6] text-white font-bold py-2 px-6 rounded-md shadow hover:bg-[#4178d4] transition flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </>
              ) : 'Login'}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
} 