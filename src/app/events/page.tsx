"use client";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { format, parseISO } from "date-fns";
import { API_ENDPOINTS } from "@/lib/api";

function formatEventDate(dateStr: string) {
  if (!dateStr) return "";
  try {
    const date = parseISO(dateStr);
    // Format: Tuesday, June 24th
    return format(date, "EEEE, MMMM do");
  } catch {
    return dateStr;
  }
}

function formatEventTime(timeStr: string) {
  if (!timeStr) return "";
  const [h, m] = timeStr.split(":");
  if (h === undefined || m === undefined) return timeStr;
  let hour = parseInt(h, 10);
  const minute = m;
  const ampm = hour >= 12 ? "pm" : "am";
  hour = hour % 12;
  if (hour === 0) hour = 12;
  return `${hour}:${minute}${ampm}`;
}

// Extended interface to handle API response format
interface EventResponse extends Record<string, unknown> {
  id: number;
  title: string;
  description: string;
  date: string;
  start_time?: string;
  end_time?: string;
  slug: string;
  graphic?: string;
  graphic_url?: string;
  location_name?: string;
  location_address?: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<EventResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get(API_ENDPOINTS.eventsAll);
        console.log("Events data:", res.data);
        // More detailed debug logs for each event
        res.data.forEach((event: EventResponse) => {
          console.log(`Event: ${event.title}`);
          console.log(`Graphic: ${event.graphic}`);
          console.log(`GraphicURL: ${event.graphic_url}`);
          console.log(`Slug: ${event.slug}`);
          if (event.slug === 'braseltontech-ai-learning-event') {
            console.log("Found AI event! Here's the full event data:", JSON.stringify(event, null, 2));
          }
        });
        setEvents(res.data);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Could not load events.");
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsAdmin(!!localStorage.getItem("admin_token"));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#f0f6ff] to-[#a7c7ff]">
      <NavBar />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mx-auto flex flex-col gap-8 items-center">
            <div className="flex items-center justify-center gap-4 mb-2">
              <h1 className="text-4xl font-extrabold text-gray-800">Events</h1>
              {isAdmin && (
                <div className="ml-auto">
                  <Link href="/events/create">
                    <Button className="bg-white text-gray-800 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition">
                      Create Event
                    </Button>
                  </Link>
                </div>
              )}
            </div>
            {loading ? (
              <div className="text-gray-600 text-center">Loading events...</div>
            ) : error ? (
              <div className="text-red-600 text-center">{error}</div>
            ) : events.length === 0 ? (
              <div className="text-gray-600 text-center">No events found.</div>
            ) : (
              events.map(event => {
                // Debug logging outside of JSX
                if (event.graphic) {
                  console.log("Rendering image for:", event.title);
                  const imageUrl = event.graphic_url 
                    ? event.graphic_url 
                    : event.slug === 'braseltontech-ai-learning-event'
                      ? 'https://res.cloudinary.com/debagjz7e/image/upload/c_limit,w_1200/f_auto/q_auto/BTech-Ai-Event-Website-Graphic_mqgo2i.auto'
                      : event.graphic.startsWith('http')
                        ? event.graphic
                        : (process.env.NEXT_PUBLIC_API_BASE_URL + event.graphic);
                  console.log("Image URL:", imageUrl);
                }
                
                return (
                <section key={event.id} className="w-full bg-white rounded-2xl shadow-xl border border-blue-100 p-8 flex flex-col md:flex-row items-center md:items-stretch mb-6 max-w-6xl mx-auto">
                  <div className={event.graphic ? "flex-1 flex flex-col justify-center md:pr-8" : "w-full"}>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">{event.title}</h3>
                    <div className="text-blue-700 mb-2 font-semibold text-center">
                      {formatEventDate(event.date)}
                      {typeof event.start_time === "string" && typeof event.end_time === "string" && event.start_time && (
                        <>
                          <span className='mx-2 text-gray-400'>&bull;</span>
                          {formatEventTime(event.start_time)} - {formatEventTime(event.end_time)}
                        </>
                      )}
                    </div>
                    <div className="text-gray-700 text-base leading-relaxed mb-4 text-center">{event.description as string}</div>
                    <div className="text-gray-600 mb-6 text-center">
                      <span className="font-semibold">{event.location_name}</span><br />
                      {event.location_address}
                    </div>
                    <div className="flex justify-center space-x-4">
                      <Link href={`/events/${event.slug}`}>
                        <Button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md shadow-lg hover:bg-blue-700 transition w-auto">
                          View Event
                        </Button>
                      </Link>
                      <Link href={`/events/${event.slug}/rsvp`}>
                        <Button className="bg-white text-gray-800 font-mono font-extrabold tracking-wide uppercase px-6 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition w-auto">
                          RSVP
                        </Button>
                      </Link>
                    </div>
                  </div>
                  {typeof event.graphic === "string" && event.graphic && (
                    <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
                      <div className="relative w-full h-64 max-w-xs">
                        <Image
                          src={
                            // Try graphic_url first, then check if it's the AI event, then fall back to other options
                            event.graphic_url ? event.graphic_url :
                            event.slug === 'braseltontech-ai-learning-event' ? 
                              'https://res.cloudinary.com/debagjz7e/image/upload/c_limit,w_1200/f_auto/q_auto/BTech-Ai-Event-Website-Graphic_mqgo2i.auto' :
                            event.graphic.startsWith('http')
                              ? event.graphic
                              : (process.env.NEXT_PUBLIC_API_BASE_URL + event.graphic)
                          }
                          alt={`${event.title} Event Graphic`}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-lg"
                          sizes="(max-width: 768px) 100vw, 400px"
                          onError={(e) => {
                            console.error("Image failed to load:", e);
                            // Fall back to a direct cloudinary URL for the AI event
                            if (event.slug === 'braseltontech-ai-learning-event') {
                              (e.target as HTMLImageElement).src = 'https://res.cloudinary.com/debagjz7e/image/upload/BTech-Ai-Event-Website-Graphic_mqgo2i';
                            }
                          }}
                        />
                      </div>
                    </div>
                  )}
                </section>
              )})
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 