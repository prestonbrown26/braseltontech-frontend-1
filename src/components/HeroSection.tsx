"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";
import { format, parseISO } from "date-fns";
import AdminEditableText from "./AdminEditableText";
import { AnimatePresence } from "framer-motion";

interface EventType {
  title?: string;
  graphic?: string;
  description?: string;
  date?: string;
  start_time?: string;
  end_time?: string;
  location_name?: string;
  slug?: string;
}

export default function HeroSection() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [eventIndex, setEventIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [heroTitle, setHeroTitle] = useState("Welcome to BraseltonTech");
  const [heroDesc, setHeroDesc] = useState("We help our members create, develop, and scale technology companies.");

  useEffect(() => {
    async function fetchEvents() {
      setLoading(true);
      try {
        const res = await axios.get(
          process.env.NEXT_PUBLIC_API_BASE_URL
            ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/events/` // ✅ Fixed API endpoint
            : "http://localhost:8000/api/events/"
        );
        setEvents(res.data);
      } catch {
        setEvents([]);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  useEffect(() => {
    const filtered = events.filter((e) => e.slug !== 'braseltontech-ai-learning-event');
    if (isHovered) return;
    if (filtered.length === 1) {
      const interval = setInterval(() => {
        setEventIndex((i) => (i + 1) % 2);
      }, 5000);
      return () => clearInterval(interval);
    } else if (filtered.length > 1) {
      const interval = setInterval(() => {
        setEventIndex((i) => (i + 1) % filtered.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [events, isHovered]);

  function formatEventDate(dateStr?: string) {
    if (!dateStr) return "";
    try {
      const date = parseISO(dateStr);
      return format(date, "EEEE, MMMM do");
    } catch {
      return dateStr;
    }
  }

  function formatEventTime(timeStr?: string) {
    if (!timeStr) return "";
    const [h, m] = timeStr.split(":");
    if (h === undefined || m === undefined) return timeStr;
    let hour = parseInt(h, 10);
    const minute = m;
    const ampm = hour >= 12 ? "pm" : "am";
    hour = hour % 12;
    if (hour === 0) hour = 12;
    return `${hour}:${minute}${ampm}`; // ✅ Fixed interpolation
  }

  function isEventStarted(eventDate?: string, startTime?: string) {
    if (!eventDate) return false;
    try {
      const date = parseISO(eventDate);
      if (startTime) {
        const [h, m] = startTime.split(":");
        const hours = parseInt(h || "0", 10);
        const minutes = parseInt(m || "0", 10);
        date.setHours(hours, minutes, 0, 0);
      } else {
        date.setHours(0, 0, 0, 0);
      }
      return new Date().getTime() >= date.getTime();
    } catch {
      return false;
    }
  }

  const visibleEvents = events.filter((e) => e.slug !== 'braseltontech-ai-learning-event');
  let cardContent;
  if (loading) {
    cardContent = (
      <div className="w-full max-w-md bg-white/95 rounded-2xl shadow-xl border border-blue-100 px-8 py-7 flex flex-col items-center text-gray-600 text-center">
        Loading events...
      </div>
    );
  } else if (visibleEvents.length === 0) {
    cardContent = (
      <div className="w-full max-w-md bg-white/95 rounded-2xl shadow-xl border border-blue-100 px-8 py-7 flex flex-col items-center text-gray-600 text-center">
        No events found.
      </div>
    );
  } else if (visibleEvents.length === 1) {
    if (eventIndex === 0) {
      const event = visibleEvents[0];
      cardContent = (
        <motion.div
          key="event"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="w-full max-w-3xl min-h-[520px] md:min-h-[600px] bg-white/95 rounded-3xl shadow-2xl border border-blue-100 px-0 py-0 flex flex-col items-center justify-center pb-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{event.title}</h3>
          {event.graphic ? (
            <img
              src={event.graphic.startsWith("http") ? event.graphic : `${process.env.NEXT_PUBLIC_API_BASE_URL}${event.graphic}`} // ✅ Fixed interpolation
              alt="Event Graphic"
              className="mb-6 rounded-2xl object-contain w-full max-w-2xl max-h-[420px] min-h-[220px] mx-auto"
            />
          ) : (
            <p className="text-gray-700 text-base leading-relaxed text-center mb-6">{event.description}</p>
          )}
          <div className="font-semibold mb-2 text-center text-blue-700">
            {formatEventDate(event.date)}
            {event.start_time && (
              <>
                <span className="mx-2 text-gray-400">&bull;</span>
                {formatEventTime(event.start_time)}
                {event.end_time && ` - ${formatEventTime(event.end_time)}`} {/* ✅ Fixed interpolation */}
              </>
            )}
          </div>
          <div className="text-gray-600 text-center mb-4">
            <span className="font-semibold">{event.location_name}</span>
          </div>
          <div className="flex gap-4 justify-center mt-2">
            {isEventStarted(event.date, event.start_time) ? (
              <Link href={`/events/${event.slug}/feedback`}>
                <Button className="bg-white text-gray-800 font-mono font-extrabold tracking-wide uppercase px-6 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition">
                  Feedback
                </Button>
              </Link>
            ) : (
              <Link href={`/events/${event.slug}/rsvp`}>
                <Button className="bg-white text-gray-800 font-mono font-extrabold tracking-wide uppercase px-6 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition">
                  RSVP
                </Button>
              </Link>
            )}
            <Link href={`/events#${event.slug}`} scroll={false}>
              <Button className="bg-white text-blue-700 font-mono font-extrabold tracking-wide uppercase px-6 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition">
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>
      );
    } else {
      cardContent = (
        <motion.div
          key="more-coming"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="w-full max-w-3xl min-h-[520px] md:min-h-[600px] bg-white/95 rounded-3xl shadow-2xl border border-blue-100 px-0 py-0 flex flex-col items-center justify-center pb-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="text-2xl font-bold text-blue-700 mb-2 text-center">More Events Coming Soon</div>
          <div className="text-gray-700 text-center">Stay tuned for new opportunities and gatherings!</div>
          <div className="flex gap-4 justify-center mt-6">
            <Link href="/events">
              <Button className="bg-white text-gray-800 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition">
                See Events
              </Button>
            </Link>
            <Link href="/involved/ai-learning-event">
              <Button className="bg-white text-blue-700 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition">
                Request Event
              </Button>
            </Link>
          </div>
        </motion.div>
      );
    }
  } else {
        const event = visibleEvents[eventIndex % visibleEvents.length];
    cardContent = (
      <motion.div
        key={eventIndex}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="w-full max-w-3xl min-h-[520px] md:min-h-[600px] bg-white/95 rounded-3xl shadow-2xl border border-blue-100 px-0 py-0 flex flex-col items-center justify-center pb-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{event.title}</h3>
        {event.graphic ? (
          <img
            src={event.graphic.startsWith("http") ? event.graphic : `${process.env.NEXT_PUBLIC_API_BASE_URL}${event.graphic}`} // ✅ Fixed interpolation
            alt="Event Graphic"
            className="mb-6 rounded-2xl object-contain w-full max-w-2xl max-h-[420px] min-h-[220px] mx-auto"
          />
        ) : (
          <p className="text-gray-700 text-base leading-relaxed text-center mb-6">{event.description}</p>
        )}
        <div className="font-semibold mb-2 text-center text-blue-700">
          {formatEventDate(event.date)}
          {event.start_time && (
            <>
              <span className="mx-2 text-gray-400">&bull;</span>
              {formatEventTime(event.start_time)}
              {event.end_time && ` - ${formatEventTime(event.end_time)}`} {/* ✅ Fixed interpolation */}
            </>
          )}
        </div>
        <div className="text-gray-600 text-center mb-4">
          <span className="font-semibold">{event.location_name}</span>
        </div>
        <div className="flex gap-4 justify-center mt-2">
          {isEventStarted(event.date, event.start_time) ? (
            <Link href={`/events/${event.slug}/feedback`}>
              <Button className="bg-white text-gray-800 font-mono font-extrabold tracking-wide uppercase px-6 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition">
                Feedback
              </Button>
            </Link>
          ) : (
            <Link href={`/events/${event.slug}/rsvp`}>
              <Button className="bg-white text-gray-800 font-mono font-extrabold tracking-wide uppercase px-6 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition">
                RSVP
              </Button>
            </Link>
          )}
          <Link href={`/events#${event.slug}`} scroll={false}>
            <Button className="bg-white text-blue-700 font-mono font-extrabold tracking-wide uppercase px-6 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition">
              Learn More
            </Button>
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <section className="w-full bg-gradient-to-r from-[#f0f6ff] to-[#a7c7ff] px-6 py-16 text-left relative overflow-hidden border-b-8 border-white min-h-[700px] md:min-h-[800px]" style={{ background: 'linear-gradient(135deg, #f0f6ff 0%, #a7c7ff 100%)' }}>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-12 md:gap-0 min-h-[32rem]">
        <div className="flex-1 flex flex-col items-start md:pr-12 h-full justify-center md:items-start md:text-left items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <AdminEditableText value={heroTitle} onChange={setHeroTitle} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-2 leading-tight tracking-tight font-sans drop-shadow-[0_8px_40px_rgba(44,0,80,0.15)] md:text-left text-center" as="h1" />
            <AdminEditableText value={heroDesc} onChange={setHeroDesc} className="text-base sm:text-lg text-gray-700 mb-6 max-w-xl font-sans leading-relaxed md:text-left text-center" as="p" />
            <div className="w-full flex md:justify-start justify-center">
              <Link href="/about">
                <Button className="bg-white text-gray-800 font-mono font-extrabold tracking-wide uppercase px-8 py-3 rounded-md text-base shadow-lg border border-blue-100 hover:bg-blue-50 transition mb-2">
                  Learn more
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center w-full md:w-auto h-full">
          <AnimatePresence mode="wait">{cardContent}</AnimatePresence>
        </div>
      </div>
    </section>
  );
}

