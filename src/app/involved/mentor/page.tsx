"use client";
import { useState } from "react";
import axios from "axios";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { API_ENDPOINTS } from "@/lib/api";

const expertiseOptions = [
  "Startup Operations",
  "Fundraising",
  "Product Development",
  "Marketing",
  "Sales",
  "Finance",
  "Legal",
  "Technology",
  "Other"
];

export default function MentorPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ first_name: "", last_name: "", email: "", phone: "", linkedin: "", company: "", expertise: [] as string[], why: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function handleCheckbox(option: string) {
    setForm(f => ({
      ...f,
      expertise: f.expertise.includes(option)
        ? f.expertise.filter(x => x !== option)
        : [...f.expertise, option]
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await axios.post(API_ENDPOINTS.mentorSignup, {
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        phone: form.phone,
        linkedin: form.linkedin,
        company: form.company,
        areas_of_expertise: form.expertise.join(", "),
        why_mentor: form.why,
      });
      setSubmitted(true);
    } catch (err) {
      alert("There was an error submitting the form. Please try again later.");
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#f0f6ff] to-[#a7c7ff]">
      <NavBar />
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">Become a Mentor</h1>
          {!submitted && (
            <>
              <div className="text-gray-700 text-base text-center mb-6">If you are interested in supporting the next generation of entrepreneurs, we invite you to complete the form linked below. Please note that this form is intended solely to gauge interest and does not constitute a formal commitment. Upon receiving your submission, we will follow up with you at our earliest convenience. Thank you for your time and consideration.</div>
            </>
          )}
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-2 text-center">Thank you for your interest in mentoring!</div>
              <div className="text-base text-gray-700 text-center max-w-md">We'll be in touch soon.</div>
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
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
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
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company/Organization</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Areas of Expertise</label>
                <div className="flex flex-wrap gap-3">
                  {expertiseOptions.map(option => (
                    <label key={option} className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={form.expertise.includes(option)}
                        onChange={() => handleCheckbox(option)}
                        className="accent-blue-500"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="why" className="block text-sm font-medium text-gray-700 mb-1">Why do you want to mentor?</label>
                <textarea
                  id="why"
                  name="why"
                  value={form.why}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <Button type="submit" className="mt-2 bg-[#5b8ee6] text-white font-bold py-2 px-6 rounded-md shadow hover:bg-[#4178d4] transition">
                Submit
              </Button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
} 