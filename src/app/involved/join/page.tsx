"use client";
import { useState } from "react";
import axios from "axios";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ first_name: "", last_name: "", email: "", phone: "", linkedin: "", about: "", why: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/join-signup/` : "http://localhost:8000/api/join-signup/", {
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        phone: form.phone,
        linkedin: form.linkedin,
        about: form.about,
        why_join: form.why,
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
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">Join Braselton Tech</h1>
          {!submitted && (
            <div className="text-gray-700 text-base text-center mb-6">If you are interested in joining the Braselton Tech community, please complete the form below. This form is intended to gauge your interest and does not constitute a formal commitment. After receiving your submission, we will follow up with more information about getting involved. Thank you for your interest!</div>
          )}
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-2 text-center">Thank you for expressing interest in Braselton Tech!</div>
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
                <label htmlFor="about" className="block text-sm font-medium text-gray-700 mb-1">Tell Us About Yourself</label>
                <textarea
                  id="about"
                  name="about"
                  value={form.about}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label htmlFor="why" className="block text-sm font-medium text-gray-700 mb-1">Why Do You Want To Join BraseltonTech?</label>
                <textarea
                  id="why"
                  name="why"
                  value={form.why}
                  onChange={handleChange}
                  required
                  rows={3}
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