"use client";
import { useState } from "react";
import axios from "axios";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { API_ENDPOINTS } from "@/lib/api";

const experienceLevels = [
  "Beginner - No AI experience",
  "Some experience with AI tools",
  "Intermediate - Using AI regularly",
  "Advanced - AI implementation experience"
];

const attendeeRanges = [
  "10-25 people",
  "26-50 people", 
  "51-100 people",
  "100+ people"
];

const timelineOptions = [
  "Within 1 month",
  "1-3 months",
  "3-6 months",
  "6+ months"
];

export default function AILearningEventPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ 
    first_name: "", 
    last_name: "", 
    email: "", 
    phone: "", 
    organization: "", 
    city: "", 
    state: "", 
    expected_attendees: "", 
    ai_experience_level: "", 
    industry: "", 
    preferred_topics: "", 
    timeline: "", 
    additional_notes: "" 
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(API_ENDPOINTS.aiLearningEventRequest, form);
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
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">Have an AI Learning Event Near You</h1>
          {!submitted && (
            <div className="text-gray-700 text-base text-center mb-6">
              Want to bring AI education to your community? Let us know where you&apos;d like to host an AI learning event! 
              We&apos;ll work with you to plan and organize a workshop tailored to your area&apos;s needs.
            </div>
          )}
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-2 text-center">Thank you for your interest!</div>
              <div className="text-base text-gray-700 text-center max-w-md">
                We&apos;ve received your request to host an AI learning event. Our events team will review your information 
                and contact you within 3-5 business days to discuss next steps and planning details.
              </div>
            </div>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization/Company</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                  placeholder="e.g., Chamber of Commerce, Business Association, etc."
                  className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    required
                    placeholder="e.g., GA"
                    className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="expected_attendees" className="block text-sm font-medium text-gray-700 mb-1">Expected Number of Attendees</label>
                <select
                  id="expected_attendees"
                  name="expected_attendees"
                  value={form.expected_attendees}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Select expected attendance</option>
                  {attendeeRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="ai_experience_level" className="block text-sm font-medium text-gray-700 mb-1">AI Experience Level in Your Community</label>
                <select
                  id="ai_experience_level"
                  name="ai_experience_level"
                  value={form.ai_experience_level}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Select experience level</option>
                  {experienceLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">Primary Industry in Your Area</label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  value={form.industry}
                  onChange={handleChange}
                  placeholder="e.g., Manufacturing, Healthcare, Retail, Agriculture, etc."
                  className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label htmlFor="preferred_topics" className="block text-sm font-medium text-gray-700 mb-1">Preferred AI Topics</label>
                <textarea
                  id="preferred_topics"
                  name="preferred_topics"
                  value={form.preferred_topics}
                  onChange={handleChange}
                  rows={3}
                  placeholder="What specific AI topics would be most valuable for your community? (e.g., ChatGPT basics, AI for business automation, data analytics, etc.)"
                  className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">Preferred Timeline</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={form.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Select timeline</option>
                  {timelineOptions.map(timeline => (
                    <option key={timeline} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="additional_notes" className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                <textarea
                  id="additional_notes"
                  name="additional_notes"
                  value={form.additional_notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Any additional information about your community, venue options, or specific requirements..."
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
                ) : 'Request AI Learning Event'}
              </Button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
} 