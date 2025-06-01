"use client";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import AdminEditableText from "@/components/AdminEditableText";
import { useState } from "react";

export default function InvolvedPage() {
  const [joinTitle, setJoinTitle] = useState("Join Braselton Tech");
  const [joinBody, setJoinBody] = useState("Are you an aspiring tech entrepreneur seeking mentorship and growth? Join a thriving community of innovators, founders, and tech enthusiasts in Northeast Georgia. Collaborate with like-minded individuals, gain valuable guidance, and help shape the future of technology, together.");
  const [levelupTitle, setLevelupTitle] = useState("Level Up Your Startup");
  const [levelupBody, setLevelupBody] = useState("Building something great? We're here to help. If you're an early-stage startup looking for guidance, funding support, or a community to grow with, Braselton Tech is here for you. Gain access to experienced mentors, a connected network, and the resources you need to take your idea to the next level. Join our growing community of founders and start building your future today.");
  const [sponsorTitle, setSponsorTitle] = useState("Become a Sponsor");
  const [sponsorBody, setSponsorBody] = useState("Support the Future of Technology in Northeast Georgia. Braselton Tech is seeking sponsors to help fuel innovation and entrepreneurship in the region. Join us in building a thriving community of startups, mentors, and investors dedicated to shaping the future of technology.");
  const [mentorTitle, setMentorTitle] = useState("Become a Mentor");
  const [mentorBody, setMentorBody] = useState("Empower the next generation of entrepreneurs. Share your experience and insights with aspiring founders at Braselton Tech. As a mentor, you'll play a vital role in helping early-stage startups grow, overcome challenges, and reach their full potential.");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#f0f6ff] to-[#a7c7ff]">
      <NavBar />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <section className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 w-full">
            <AdminEditableText value={joinTitle} onChange={setJoinTitle} className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 text-center uppercase tracking-wide" as="h2" />
            <AdminEditableText value={joinBody} onChange={setJoinBody} className="text-gray-700 text-base sm:text-lg leading-relaxed text-center" as="p" />
            <div className="flex justify-center mt-6">
              <a href="/involved/join">
                <Button className="bg-white text-gray-800 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition">
                  Join Now
                </Button>
              </a>
            </div>
          </section>
          <section className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 w-full">
            <AdminEditableText value={levelupTitle} onChange={setLevelupTitle} className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 text-center uppercase tracking-wide" as="h2" />
            <AdminEditableText value={levelupBody} onChange={setLevelupBody} className="text-gray-700 text-base sm:text-lg leading-relaxed text-center" as="p" />
            <div className="flex justify-center mt-6">
              <a href="/involved/levelup">
                <Button className="bg-white text-gray-800 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition">
                  Get Started
                </Button>
              </a>
            </div>
          </section>
          <section className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 w-full">
            <AdminEditableText value={sponsorTitle} onChange={setSponsorTitle} className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 text-center uppercase tracking-wide" as="h1" />
            <AdminEditableText value={sponsorBody} onChange={setSponsorBody} className="text-gray-700 text-base sm:text-lg leading-relaxed text-center" as="p" />
            <div className="flex justify-center mt-6">
              <a href="/involved/sponsor">
                <Button className="bg-white text-gray-800 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition">
                  Become a Sponsor
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
                  Become a Mentor
                </Button>
              </a>
            </div>
          </section>
          <div className="hidden md:block" />
        </div>
      </main>
      <Footer />
    </div>
  );
} 