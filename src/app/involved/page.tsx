"use client";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import AdminEditableText from "@/components/AdminEditableText";
import { useState } from "react";

export default function InvolvedPage() {
  const [aiTitle, setAiTitle] = useState("Integrate AI Into Your Business");
  const [aiBody, setAiBody] = useState("Ready to transform your business with AI? Braselton Tech provides comprehensive AI solutions services to help you integrate artificial intelligence into your operations. From process automation to data analytics, we help businesses of all sizes leverage AI to improve efficiency, reduce costs, and gain competitive advantages. Our expert team works with you to identify opportunities and implement tailored AI solutions that drive real results.");
  const [sponsorTitle, setSponsorTitle] = useState("Become a Sponsor");
  const [sponsorBody, setSponsorBody] = useState("Support the Future of Technology in Northeast Georgia. Braselton Tech is seeking sponsors to help fuel innovation and entrepreneurship in the region. Join us in building a thriving community of startups, mentors, and investors dedicated to shaping the future of technology.");
  const [mentorTitle, setMentorTitle] = useState("Become a Mentor");
  const [mentorBody, setMentorBody] = useState("Empower the next generation of entrepreneurs. Share your experience and insights with aspiring founders at Braselton Tech. As a mentor, you&apos;ll play a vital role in helping early-stage startups grow, overcome challenges, and reach their full potential.");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#f0f6ff] to-[#a7c7ff]">
      <NavBar />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <section className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 w-full">
            <AdminEditableText value={aiTitle} onChange={setAiTitle} className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 text-center uppercase tracking-wide" as="h2" />
            <AdminEditableText value={aiBody} onChange={setAiBody} className="text-gray-700 text-base sm:text-lg leading-relaxed text-center" as="p" />
            <div className="flex justify-center mt-6">
              <a href="/involved/ai-integration">
                <Button className="bg-white text-gray-800 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition">
                  Get AI Solutions
                </Button>
              </a>
            </div>
          </section>
          <section className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 w-full">
            <AdminEditableText value={sponsorTitle} onChange={setSponsorTitle} className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 text-center uppercase tracking-wide" as="h2" />
            <AdminEditableText value={sponsorBody} onChange={setSponsorBody} className="text-gray-700 text-base sm:text-lg leading-relaxed text-center" as="p" />
            <div className="flex justify-center mt-6">
              <a href="/involved/sponsor">
                <Button className="bg-white text-gray-800 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition">
                  Sponsor Us
                </Button>
              </a>
            </div>
          </section>
          <section className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 w-full">
            <AdminEditableText value={mentorTitle} onChange={setMentorTitle} className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 text-center uppercase tracking-wide" as="h2" />
            <AdminEditableText value={mentorBody} onChange={setMentorBody} className="text-gray-700 text-base sm:text-lg leading-relaxed text-center" as="p" />
            <div className="flex justify-center mt-6">
              <a href="/involved/mentor">
                <Button className="bg-white text-gray-800 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition">
                  Mentor With Us
                </Button>
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
} 