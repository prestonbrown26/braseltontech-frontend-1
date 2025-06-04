"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-white border-t border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-gray-800 text-sm font-sans gap-6">
        <motion.div whileHover={{ scale: 1.12 }} transition={{ duration: 0.1 }} className="inline-block">
          <Link href="/" className="flex items-center text-2xl font-extrabold text-gray-800">
            <img src="/images/braselton-tech-logo.jpg" alt="Braselton Tech Logo" className="h-8 w-8 rounded-full mr-3 object-cover" />
            BraseltonTech
          </Link>
        </motion.div>
        <div className="flex gap-4">
          <motion.a
            href="https://www.linkedin.com/company/braselton-tech/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-800"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.1 }}
          >
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="inline align-middle"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
          </motion.a>
          <motion.a
            href="https://www.facebook.com/BraseltonTech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-800"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.1 }}
          >
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="inline align-middle"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.326v-21.349c0-.734-.593-1.326-1.326-1.326z"/></svg>
          </motion.a>
        </div>
      </div>
      <div className="pt-8 text-center text-xs text-gray-400 font-sans">
        © Copyright BraseltonTech. All rights reserved.
      </div>
    </footer>
  );
} 