"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getEventUrl, getEventRsvpUrl } from "@/lib/api";

export default function RSVPPage() {
  const { slug } = useParams();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    business_name: "",
    email: "",
    phone: "",
    number_of_attendees: 1,
    opt_in_call: false,
  });
  const [eventTitle, setEventTitle] = useState<string>("");
  const [eventLoading, setEventLoading] = useState(true);
  const [eventError, setEventError] = useState("");

  useEffect(() => {
    async function fetchEvent() {
      setEventLoading(true);
      setEventError("");
      try {
        const res = await axios.get(getEventUrl(slug));
        setEventTitle(res.data.title);
      } catch (err) {
        setEventError("Could not load event details.");
      } finally {
        setEventLoading(false);
      }
    }
    if (slug) fetchEvent();
  }, [slug]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await axios.post(getEventRsvpUrl(slug), {
        ...form,
      });
      setSubmitted(true);
    } catch (err) {
      alert("There was an error submitting your RSVP. Please try again later.");
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#f0f6ff] to-[#a7c7ff]">
      <NavBar />
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
          {eventLoading ? (
            <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">Loading event...</h1>
          ) : eventError ? (
            <h1 className="text-3xl font-extrabold text-red-600 mb-2 text-center">{eventError}</h1>
          ) : (
            <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">RSVP for {eventTitle}</h1>
          )}
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-2 text-center">RSVP Submitted!</div>
              <div className="text-base text-gray-700 text-center max-w-md">Thank you for your RSVP. We look forward to seeing you at the event!</div>
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
                <label htmlFor="business_name" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
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
                <label htmlFor="number_of_attendees" className="block text-sm font-medium text-gray-700 mb-1">Number of Attendees</label>
                <input
                  type="number"
                  id="number_of_attendees"
                  name="number_of_attendees"
                  value={form.number_of_attendees}
                  onChange={handleChange}
                  min={1}
                  required
                  className="w-full px-4 py-2 border border-blue-100 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="opt_in_call"
                    name="opt_in_call"
                    checked={form.opt_in_call}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="opt_in_call" className="text-sm text-gray-700">
                    Opt-In Agreement
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  By checking this box, I agree to be contacted by BraseltonTech or its designated agent via phone call, text or email regarding Agentic AI services. I understand that these calls may be made using automated technology, and that checking this box gives my express consent to be contacted.
                </p>
              </div>
              <Button type="submit" className="mt-2 bg-[#5b8ee6] text-white font-bold py-2 px-6 rounded-md shadow hover:bg-[#4178d4] transition">
                Submit RSVP
              </Button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
} 