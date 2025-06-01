"use client";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="w-full py-12 bg-gradient-to-r from-[#23235b] to-[#6c2eb7] rounded-2xl shadow-md mb-8">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold text-purple-100 mb-4 font-sans">Ready to launch your idea?</h3>
        <Button className="bg-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-md hover:bg-purple-700 transition">
          Join Us
        </Button>
      </div>
    </section>
  );
} 