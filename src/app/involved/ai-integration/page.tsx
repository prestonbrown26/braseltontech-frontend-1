"use client";
import { useState } from "react";
import axios from "axios";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { API_ENDPOINTS } from "@/lib/api";

export default function AIIntegrationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ 
    first_name: "", 
    last_name: "", 
    businessName: "", 
    email: "", 
    phone: "", 
    linkedin: "", 
    website: "", 
    industry: "", 
    currentChallenges: "", 
    aiGoals: "" 
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(API_ENDPOINTS.levelUpSignup, {
        first_name: form.first_name,
        last_name: form.last_name,
        startup_name: form.businessName,
        email: form.email,
        phone: form.phone,
        linkedin: form.linkedin,
        website: form.website,
        about_startup: form.currentChallenges,
        why_help: form.aiGoals,
      });
      setSubmitted(true);
    } catch {
      alert("There was an error submitting the form. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#f0f6ff] to-[#a7c7ff]">
      <NavBar />
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">Integrate AI Into Your Business</h1>
          {!submitted && (
            <div className="text-gray-700 text-base text-center mb-6">Ready to transform your business with AI? Complete the form below to get started with our AI solutions services. We'll help you identify opportunities for AI integration and develop a customized plan to improve your operations, reduce costs, and gain competitive advantages.</div>
          )}
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-2 text-center">Thank you for your interest in AI integration!</div>
              <div className="text-base text-gray-700 text-center max-w-md">Our AI solutions team will review your information and contact you soon to discuss how we can help transform your business with artificial intelligence.</div>
            </div>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
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
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
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
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={form.businessName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
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
              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">LinkedIn (optional)</label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={form.linkedin}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Business Website (optional)</label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  value={form.industry}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Manufacturing, Healthcare, Retail, etc."
                  className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label htmlFor="currentChallenges" className="block text-sm font-medium text-gray-700 mb-1">Current Business Challenges</label>
                <textarea
                  id="currentChallenges"
                  name="currentChallenges"
                  value={form.currentChallenges}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="Describe the main challenges your business is facing that AI might help solve..."
                  className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label htmlFor="aiGoals" className="block text-sm font-medium text-gray-700 mb-1">AI Integration Goals</label>
                <textarea
                  id="aiGoals"
                  name="aiGoals"
                  value={form.aiGoals}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="What specific AI solutions are you interested in? (e.g., process automation, data analytics, customer service, etc.)"
                  className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
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
                ) : 'Get AI Solutions'}
              </Button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
} 