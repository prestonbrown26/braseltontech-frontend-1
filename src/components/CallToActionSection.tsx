"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AdminEditableText from "./AdminEditableText";
import { useState } from "react";

export default function CallToActionSection() {
  const [descs, setDescs] = useState([
    "Support Northeast Georgia's next wave of tech innovators. Braselton Tech is seeking sponsors to help provide resources and mentorship to growing startups.",
    "Share your knowledge to help startups grow their ideas and businesses."
  ]);

  const [titles, setTitles] = useState([
    "Sponsor us",
    "Mentor with us"
  ]);

  const cards = [
    {
      title: "Sponsor us",
      desc: "Support Northeast Georgia's next wave of tech innovators. Braselton Tech is seeking sponsors to help provide resources and mentorship to growing startups.",
      button: "Become a sponsor"
    },
    {
      title: "Mentor with us",
      desc: "Share your knowledge to help startups grow their ideas and businesses.",
      button: "Become a mentor"
    }
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#f0f6ff] to-[#a7c7ff] px-6 py-20 gap-12 text-center relative overflow-hidden mt-0 border-t-8 border-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-10 items-stretch justify-center z-10">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="flex-1 bg-white/90 rounded-3xl shadow-xl border border-blue-100 p-10 flex flex-col items-center text-center justify-between"
          >
            <AdminEditableText value={titles[i]} onChange={val => setTitles(t => t.map((title, j) => j === i ? val : title))} className="text-2xl font-bold text-gray-800 mb-3" as="h3" />
            <AdminEditableText value={descs[i]} onChange={val => setDescs(d => d.map((desc, j) => j === i ? val : desc))} className="text-gray-700 mb-6" as="p" />
            <div className="flex-1 flex flex-col justify-end w-full">
              {card.button === "Become a mentor" ? (
                <Link href="/involved/mentor">
                  <Button className="bg-white text-gray-800 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition w-full max-w-xs mx-auto">
                    {card.button}
                  </Button>
                </Link>
              ) : card.button === "Become a sponsor" ? (
                <Link href="/involved/sponsor">
                  <Button className="bg-white text-gray-800 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition w-full max-w-xs mx-auto">
                    {card.button}
                  </Button>
                </Link>
              ) : (
                <Button className="bg-white text-gray-800 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition w-full max-w-xs mx-auto">{card.button}</Button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 