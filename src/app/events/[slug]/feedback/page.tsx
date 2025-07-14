"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function EventFeedbackPage() {
  const { slug } = useParams();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    business_name: "",
    what_liked: "",
    what_improved: "",
    next_topics: "",
    additional_comments: "",
  });
  const [eventTitle, setEventTitle] = useState<string>("");
  const [eventLoading, setEventLoading] = useState(true);
  const [eventError, setEventError] = useState("");

  useEffect(() => {
    async function fetchEvent() {
      setEventLoading(true);
      setEventError("");
      try {
        const res = await axios.get(
          process.env.NEXT_PUBLIC_API_BASE_URL
            ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/events/${slug}/`
            : `http://localhost:8000/api/events/${slug}/`
        );
        setEventTitle(res.data.title);
      } catch {
        setEventError("Could not load event details.");
      } finally {
        setEventLoading(false);
      }
    }
    if (slug) fetchEvent();
  }, [slug]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        process.env.NEXT_PUBLIC_API_BASE_URL
          ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/events/${slug}/feedback/`
          : `http://localhost:8000/api/events/${slug}/feedback/`,
        { ...form }
      );
      setSubmitted(true);
    } catch {
      alert("There was an error submitting your feedback. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#f0f6ff] to-[#a7c7ff]">
      <NavBar />
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
          {eventLoading ? (
            <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">Loading event...</h1>
          ) : eventError ? (
            <h1 className="text-3xl font-extrabold text-red-600 mb-2 text-center">{eventError}</h1>
          ) : (
            <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">Feedback for {eventTitle}</h1>
          )}
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-2 text-center">Feedback Submitted!</div>
              <div className="text-base text-gray-700 text-center max-w-md">Thank you for your feedback. Your input helps us improve future events!</div>
            </div>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={form.first_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={form.last_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
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
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="business_name" className="block text-sm font-medium text-gray-700 mb-1">Company/Business Name</label>
                <input
                  type="text"
                  id="business_name"
                  name="business_name"
                  value={form.business_name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label htmlFor="what_liked" className="block text-sm font-medium text-gray-700 mb-1">What did you like most about the event? *</label>
                <textarea
                  id="what_liked"
                  name="what_liked"
                  value={form.what_liked}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                  placeholder="Tell us what you enjoyed most..."
                />
              </div>
              <div>
                <label htmlFor="what_improved" className="block text-sm font-medium text-gray-700 mb-1">What could be improved? *</label>
                <textarea
                  id="what_improved"
                  name="what_improved"
                  value={form.what_improved}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                  placeholder="Share your suggestions for improvement..."
                />
              </div>
              <div>
                <label htmlFor="next_topics" className="block text-sm font-medium text-gray-700 mb-1">What topics would you like to see at future events? *</label>
                <textarea
                  id="next_topics"
                  name="next_topics"
                  value={form.next_topics}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                  placeholder="What topics interest you most?"
                />
              </div>
              <div>
                <label htmlFor="additional_comments" className="block text-sm font-medium text-gray-700 mb-1">Additional Comments</label>
                <textarea
                  id="additional_comments"
                  name="additional_comments"
                  value={form.additional_comments}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                  placeholder="Any other thoughts or suggestions..."
                />
              </div>
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
                    Submitting...
                  </>
                ) : 'Submit Feedback'}
              </Button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
} 