"use client";
import { useState, useEffect } from "react";
import axios from "axios";

interface Event {
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

export default function TestPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchEvents() {
      setLoading(true);
      try {
        const res = await axios.get(
          process.env.NEXT_PUBLIC_API_BASE_URL
            ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/events/`
            : "http://localhost:8000/api/events/"
        );
        console.log("Events data:", res.data);
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Page</h1>
      <div className="space-y-4">
        {events.map((event: Event) => (
          <div key={event.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-600">{event.description}</p>
            <p className="text-sm text-blue-600">{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 