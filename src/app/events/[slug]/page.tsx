"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import { Event } from "@/lib/types";

function isFeedbackAvailable(eventDate?: string) {
  if (!eventDate) return false;
  try {
    const date = parseISO(eventDate);
    // Set to 9:00 AM on the event day for feedback availability
    date.setHours(9, 0, 0, 0);
    return new Date().getTime() >= date.getTime();
  } catch {
    return false;
  }
}

function isEventStarted(eventDate?: string, startTime?: string) {
  if (!eventDate) return false;
  try {
    const date = parseISO(eventDate);
    
    if (startTime) {
      // Parse the start time and set it on the event date
      const [hours, minutes] = startTime.split(':').map(Number);
      date.setHours(hours, minutes, 0, 0);
    } else {
      // If no start time, default to 9:00 AM
      date.setHours(9, 0, 0, 0);
    }
    
    return new Date().getTime() >= date.getTime();
  } catch {
    return false;
  }
}

export default function EventDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "";
        console.log(`Fetching event with slug: ${slug} from ${backendUrl}/api/events/${slug}/`);
        
        const response = await fetch(`${backendUrl}/api/events/${slug}/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch event: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Event data:", data);
        
        if (data.graphic) {
          console.log("Event has graphic:", data.graphic);
          console.log("Event has graphic_url:", data.graphic_url);
        } else {
          console.log("Event has no graphic");
        }
        
        if (slug === 'braseltontech-ai-learning-event') {
          console.log("This is the AI learning event - full data:", JSON.stringify(data, null, 2));
        }
        
        setEvent(data);
      } catch (err) {
        console.error("Error fetching event:", err);
        setError(err instanceof Error ? err.message : "Failed to load event details");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchEvent();
    }
  }, [slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "MMMM d, yyyy");
  };

  const formatTime = (timeString: string) => {
    // Format time from HH:MM:SS to more readable format
    const [hours, minutes] = timeString.split(":");
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  };

  // Function to get proper image URL
  const getImageUrl = (event: Event) => {
    if (!event.graphic) return null;
    
    // Use specific URL for AI event
    if (event.slug === 'braseltontech-ai-learning-event') {
      const aiImageUrl = 'https://res.cloudinary.com/debagjz7e/image/upload/c_limit,w_1200/f_auto/q_auto/BTech-Ai-Event-Website-Graphic_mqgo2i.auto';
      console.log("Using hardcoded URL for AI event:", aiImageUrl);
      return aiImageUrl;
    }
    
    // Use graphic_url if available
    if (event.graphic_url) {
      console.log("Using graphic_url:", event.graphic_url);
      return event.graphic_url;
    }
    
    // Use direct graphic if it's a URL
    if (typeof event.graphic === 'string' && event.graphic.startsWith('http')) {
      console.log("Using graphic as URL:", event.graphic);
      return event.graphic;
    }
    
    // Fall back to prepending API base URL
    const fallbackUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL || ''}${event.graphic}`;
    console.log("Using fallback URL:", fallbackUrl);
    return fallbackUrl;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#f0f6ff] to-[#a7c7ff]">
      <NavBar />
      <main className="flex-grow px-4 py-12 max-w-6xl mx-auto w-full">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-center p-6 bg-red-50 rounded-lg border border-red-200">
            <h3 className="text-xl font-bold text-red-600 mb-2">Error Loading Event</h3>
            <p className="text-gray-700">{error}</p>
            <Link href="/events" className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Back to Events
            </Link>
          </div>
        ) : event ? (
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                {event.graphic ? (
                  <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden">
                    <Image
                      src={getImageUrl(event) || ''}
                      alt={event.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      onError={(e) => {
                        console.error("Image failed to load:", e);
                        // Fall back to a direct cloudinary URL for the AI event
                        if (event.slug === 'braseltontech-ai-learning-event') {
                          (e.target as HTMLImageElement).src = 'https://res.cloudinary.com/debagjz7e/image/upload/BTech-Ai-Event-Website-Graphic_mqgo2i';
                        }
                      }}
                    />
                  </div>
                ) : (
                  <div className="bg-gray-200 w-full h-80 md:h-96 rounded-xl flex items-center justify-center">
                    <span className="text-gray-500">No image available</span>
                  </div>
                )}
              </div>
              
              <div className="md:w-1/2 flex flex-col">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{event.title}</h1>
                
                <div className="mb-6 space-y-3">
                  <div className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{formatDate(event.date)}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{formatTime(event.start_time)} - {formatTime(event.end_time)}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">About this event</h2>
                  <div className="prose text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: event.description }} />
                </div>
                
                <div className="flex gap-4 mt-4">
                  {!isEventStarted(event.date, event.start_time) && (
                    <Link 
                      href={`/events/${slug}/rsvp`}
                      className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      RSVP Now
                    </Link>
                  )}
                  {isFeedbackAvailable(event.date) && (
                    <Link 
                      href={`/events/${slug}/feedback`}
                      className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      Feedback
                    </Link>
                  )}
                  <Link 
                    href="/events"
                    className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition duration-300"
                  >
                    Back to Events
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center p-6 bg-yellow-50 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-bold text-yellow-600 mb-2">Event Not Found</h3>
            <p className="text-gray-700">Sorry, we couldn&apos;t find the event you were looking for.</p>
            <Link href="/events" className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Back to Events
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
} 