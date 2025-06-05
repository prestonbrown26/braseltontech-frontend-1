"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { API_ENDPOINTS } from "@/lib/api";
import { createAuthAxios, isTokenValid } from "@/lib/auth";

export default function CreateEventPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    date: "",
    start_time: "",
    end_time: "",
    location_name: "",
    location_address: "",
    description: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [graphic, setGraphic] = useState<File | null>(null);

  // Verify authentication first
  useEffect(() => {
    async function checkAuth() {
      try {
        console.log('Create event page: Checking authentication');
        
        // First check if we have a valid token
        if (!isTokenValid()) {
          console.log('Create event page: No valid token, redirecting to login');
          router.push('/login?from=/admin/create-event');
          return;
        }
        
        console.log('Create event page: Token valid, verifying with API');
        
        // Try to verify the token with an API call
        const authAxios = createAuthAxios();
        await authAxios.get(API_ENDPOINTS.eventsAll);
        
        console.log('Create event page: Authentication successful');
      } catch (error) {
        console.error("Create event page: Authentication failed:", error);
        router.push('/login?from=/admin/create-event&auth=failed');
      }
    }
    checkAuth();
  }, [router]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setGraphic(e.target.files[0]);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      console.log('Create event page: Submitting event data');
      const authAxios = createAuthAxios();
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => formData.append(key, value));
      if (graphic) formData.append("graphic", graphic);
      
      await authAxios.post(
        API_ENDPOINTS.events,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      
      console.log('Create event page: Event created successfully');
      router.push("/admin");
    } catch (error) {
      console.error("Create event page: Failed to create event:", error);
      setError("Failed to create event. Please check your input and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#f0f6ff] to-[#a7c7ff]">
      <NavBar />
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">Create Event</h1>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit} encType="multipart/form-data">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="start_time" className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
              <input
                type="time"
                id="start_time"
                name="start_time"
                value={form.start_time}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="end_time" className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
              <input
                type="time"
                id="end_time"
                name="end_time"
                value={form.end_time}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="location_name" className="block text-sm font-medium text-gray-700 mb-1">Location Name</label>
              <input
                type="text"
                id="location_name"
                name="location_name"
                value={form.location_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="location_address" className="block text-sm font-medium text-gray-700 mb-1">Location Address</label>
              <input
                type="text"
                id="location_address"
                name="location_address"
                value={form.location_address}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                id="description"
                name="description"
                value={form.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="graphic" className="block text-sm font-medium text-gray-700 mb-1">Event Graphic (optional)</label>
              <input
                type="file"
                id="graphic"
                name="graphic"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            {error && <div className="text-red-600 text-center text-sm font-semibold">{error}</div>}
            <Button 
              type="submit" 
              disabled={loading}
              className={`mt-2 bg-[#5b8ee6] text-white font-bold py-2 px-6 rounded-md shadow hover:bg-[#4178d4] transition flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating...
                </>
              ) : 'Create Event'}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
} 