"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { format, parseISO } from "date-fns";
import { API_ENDPOINTS, getEventDeleteUrl, getAdminContactSubmissionUrl } from "@/lib/api";
import { getToken, clearToken, createAuthAxios } from "@/lib/auth";

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

export default function AdminPage() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("events");
  const [events, setEvents] = useState<Array<Record<string, unknown>>>([]);
  const [mentorSignups, setMentorSignups] = useState<Array<Record<string, unknown>>>([]);
  const [sponsorSignups, setSponsorSignups] = useState<Array<Record<string, unknown>>>([]);
  const [joinSignups, setJoinSignups] = useState<Array<Record<string, unknown>>>([]);
  const [levelupSignups, setLevelupSignups] = useState<Array<Record<string, unknown>>>([]);
  const [contactSubmissions, setContactSubmissions] = useState<Array<Record<string, unknown>>>([]);
  const [rsvps, setRsvps] = useState<Array<Record<string, unknown>>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [rsvpEventFilter, setRsvpEventFilter] = useState<string>("all");
  const [contactRepliedFilter, setContactRepliedFilter] = useState("all");
  const [pendingReplied, setPendingReplied] = useState<Record<string, boolean>>({});
  const [debugInfo, setDebugInfo] = useState<string>("");

  // Add debugging on initial load
  useEffect(() => {
    if (typeof window !== "undefined") {
      setDebugInfo(`Page URL: ${window.location.href}`);
      console.log("Admin page loading, URL:", window.location.href);
    }
  }, []);

  // Verify authentication on page load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log('Admin page: Checking authentication');
        
        // First check if we have a valid token in localStorage
        const token = getToken();
        if (!token) {
          console.log('Admin page: No token found in localStorage');
          router.push("/login");
          return;
        }
        
        console.log('Admin page: Token found, verifying with API...');
        
        // Make a test API call to verify the token works
        const authAxios = createAuthAxios();
        await authAxios.get(API_ENDPOINTS.eventsAll);
        
        console.log('Admin page: Authentication successful');
        // Set the token in state to trigger data loading
        setToken(token);
      } catch (error) {
        console.error("Admin page: Authentication failed:", error);
        // Clear localStorage and redirect to login
        clearToken();
        router.push("/login?auth=failed");
      }
    };
    
    checkAuth();
  }, [router]);

  // Fetch data once authenticated
  useEffect(() => {
    if (!token) {
      console.log('Admin page: No token in state, waiting for auth');
      return;
    }
    
    console.log('Admin page: Token available, fetching data');
    setLoading(true);
    setError("");
    
    const fetchData = async () => {
      try {
        const authAxios = createAuthAxios();
        
        console.log('Admin page: Fetching all admin data');
        const [eventsRes, mentorRes, sponsorRes, joinRes, levelupRes, contactRes, rsvpRes] = await Promise.all([
          authAxios.get(API_ENDPOINTS.eventsAll),
          authAxios.get(API_ENDPOINTS.adminMentorSignups),
          authAxios.get(API_ENDPOINTS.adminSponsorSignups),
          authAxios.get(API_ENDPOINTS.adminJoinSignups),
          authAxios.get(API_ENDPOINTS.adminLevelupSignups),
          authAxios.get(API_ENDPOINTS.adminContactSubmissions),
          authAxios.get(API_ENDPOINTS.adminRsvps),
        ]);
        
        console.log('Admin page: Data fetch successful');
        
        setEvents(eventsRes.data);
        setMentorSignups(mentorRes.data);
        setSponsorSignups(sponsorRes.data);
        setJoinSignups(joinRes.data);
        setLevelupSignups(levelupRes.data);
        setContactSubmissions(contactRes.data);
        setRsvps(rsvpRes.data);
      } catch (error) {
        console.error("Admin page: Data fetch error:", error);
        
        let errorMessage = "Failed to load admin data. Please check your login or try again.";
        
        if (axios.isAxiosError(error)) {
          if (error.response) {
            console.error(`Admin page: Server responded with ${error.response.status}`);
            errorMessage += ` Server responded with status: ${error.response.status}`;
            
            if (error.response.status === 401) {
              errorMessage = "Your session has expired. Please log in again.";
              clearToken();
              setTimeout(() => router.push("/login?auth=failed"), 1000);
            } else if (error.response.status === 404) {
              errorMessage = "API endpoint not found. Please check backend configuration.";
            }
          } else if (error.request) {
            console.error('Admin page: No response received from server');
            errorMessage = "No response from server. Please check your internet connection or server status.";
          }
        }
        
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [token, router]);

  const handleLogout = () => {
    console.log('Admin page: Logging out, clearing localStorage');
    clearToken();
    router.push("/login");
  };

  if (!token) return null;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#f0f6ff] to-[#a7c7ff]">
      <NavBar />
      <main className="flex-1 py-12 px-4">
        <div className="max-w-[98vw] md:max-w-screen-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-blue-100 overflow-x-auto">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Admin Dashboard</h1>
          
          {/* Debug info - only visible during development */}
          {process.env.NODE_ENV === 'development' && debugInfo && (
            <div className="mb-4 p-2 bg-yellow-50 border border-yellow-200 rounded text-sm">
              <p className="font-mono">Debug: {debugInfo}</p>
            </div>
          )}
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button onClick={() => setActiveTab("events")} variant={activeTab === "events" ? "default" : "outline"}>Events</Button>
            <Button onClick={() => setActiveTab("mentor")} variant={activeTab === "mentor" ? "default" : "outline"}>Mentor Signups</Button>
            <Button onClick={() => setActiveTab("sponsor")} variant={activeTab === "sponsor" ? "default" : "outline"}>Sponsor Signups</Button>
            <Button onClick={() => setActiveTab("join")} variant={activeTab === "join" ? "default" : "outline"}>Join Signups</Button>
            <Button onClick={() => setActiveTab("levelup")} variant={activeTab === "levelup" ? "default" : "outline"}>Level Up</Button>
            <Button onClick={() => setActiveTab("contact")} variant={activeTab === "contact" ? "default" : "outline"}>Contact</Button>
            <Button onClick={() => setActiveTab("rsvp")} variant={activeTab === "rsvp" ? "default" : "outline"}>RSVPs</Button>
            <Button onClick={handleLogout} variant="outline" className="bg-red-50 hover:bg-red-100">Logout</Button>
          </div>
          {loading ? (
            <div className="text-center text-gray-600">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-600">{error}</div>
          ) : (
            <>
              {activeTab === "events" && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">Events</h2>
                    <Button onClick={() => router.push("/admin/create-event")}>Create Event</Button>
                  </div>
                  <table className="w-full min-w-[900px] text-left border-collapse mb-8 overflow-x-auto">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="p-2">Title</th>
                        <th className="p-2">Date</th>
                        <th className="p-2">Start</th>
                        <th className="p-2">End</th>
                        <th className="p-2">Location</th>
                        <th className="p-2">RSVPs</th>
                        <th className="p-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {events.map((event: Record<string, unknown>) => (
                        <tr key={event.id as React.Key} className="border-b">
                          <td className="p-2 font-semibold">{event.title as string}</td>
                          <td className="p-2">{event.date ? formatEventDate(event.date as string) : ""}</td>
                          <td className="p-2">{event.start_time ? formatEventTime(event.start_time as string) : ""}</td>
                          <td className="p-2">{event.end_time ? formatEventTime(event.end_time as string) : ""}</td>
                          <td className="p-2">{event.location_name as string}</td>
                          <td className="p-2">
                            <Button size="sm" variant="outline" onClick={() => {
                              setActiveTab("rsvp");
                              setRsvpEventFilter(String(event.id));
                            }}>RSVPs</Button>
                          </td>
                          <td className="p-2 flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => router.push(`/admin/edit-event/${event.slug}`)}>Edit</Button>
                            <Button size="sm" variant="destructive" onClick={async () => {
                              if (confirm("Delete this event?")) {
                                try {
                                  await axios.delete(
                                    getEventDeleteUrl(event.id),
                                    { headers: { Authorization: `Bearer ${token}` } }
                                  );
                                  setEvents(events.filter((e: Record<string, unknown>) => e.id !== event.id));
                                } catch {
                                  alert("Failed to delete event.");
                                }
                              }
                            }}>Delete</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {activeTab === "mentor" && (
                <div>
                  <h2 className="text-xl font-bold mb-2">Mentor Signups</h2>
                  <table className="w-full min-w-[900px] text-left border-collapse mb-8 overflow-x-auto">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="p-2">ID</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Phone</th>
                        <th className="p-2">LinkedIn</th>
                        <th className="p-2">Company</th>
                        <th className="p-2">Expertise</th>
                        <th className="p-2">Why Mentor</th>
                        <th className="p-2">Submitted At</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mentorSignups.map((m: Record<string, unknown>) => (
                        <tr key={m.id as React.Key} className="border-b">
                          <td className="p-2">{m.id as string}</td>
                          <td className="p-2 font-semibold">{m.first_name as string} {m.last_name as string}</td>
                          <td className="p-2">{m.email as string}</td>
                          <td className="p-2">{m.phone as string}</td>
                          <td className="p-2">{m.linkedin as string}</td>
                          <td className="p-2">{m.company as string}</td>
                          <td className="p-2">{m.areas_of_expertise as string}</td>
                          <td className="p-2 max-w-xs truncate" title={m.why_mentor as string}>{m.why_mentor as string}</td>
                          <td className="p-2">{m.submitted_at ? format(parseISO(m.submitted_at as string), "EEEE, MMMM do, h:mmaaa") + " EST" : ""}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {activeTab === "sponsor" && (
                <div>
                  <h2 className="text-xl font-bold mb-2">Sponsor Signups</h2>
                  <table className="w-full min-w-[900px] text-left border-collapse mb-8 overflow-x-auto">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="p-2">ID</th>
                        <th className="p-2">Contact Name</th>
                        <th className="p-2">Business Name</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Phone</th>
                        <th className="p-2">Address</th>
                        <th className="p-2">Website</th>
                        <th className="p-2">Submitted At</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sponsorSignups.map((s: Record<string, unknown>) => (
                        <tr key={s.id as React.Key} className="border-b">
                          <td className="p-2">{s.id as string}</td>
                          <td className="p-2 font-semibold">{s.first_name as string} {s.last_name as string}</td>
                          <td className="p-2">{s.business_name as string}</td>
                          <td className="p-2">{s.email as string}</td>
                          <td className="p-2">{s.phone as string}</td>
                          <td className="p-2">{s.address as string}</td>
                          <td className="p-2">{s.website as string}</td>
                          <td className="p-2">{s.submitted_at ? format(parseISO(s.submitted_at as string), "EEEE, MMMM do, h:mmaaa") + " EST" : ""}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {activeTab === "join" && (
                <div>
                  <h2 className="text-xl font-bold mb-2">Join Signups</h2>
                  <table className="w-full min-w-[900px] text-left border-collapse mb-8 overflow-x-auto">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="p-2">ID</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Phone</th>
                        <th className="p-2">LinkedIn</th>
                        <th className="p-2">About</th>
                        <th className="p-2">Why Join</th>
                        <th className="p-2">Submitted At</th>
                      </tr>
                    </thead>
                    <tbody>
                      {joinSignups.map((j: Record<string, unknown>) => (
                        <tr key={j.id as React.Key} className="border-b">
                          <td className="p-2">{j.id as string}</td>
                          <td className="p-2 font-semibold">{j.first_name as string} {j.last_name as string}</td>
                          <td className="p-2">{j.email as string}</td>
                          <td className="p-2">{j.phone as string}</td>
                          <td className="p-2">{j.linkedin as string}</td>
                          <td className="p-2">{j.about as string}</td>
                          <td className="p-2">{j.why_join as string}</td>
                          <td className="p-2">{j.submitted_at ? format(parseISO(j.submitted_at as string), "EEEE, MMMM do, h:mmaaa") + " EST" : ""}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {activeTab === "levelup" && (
                <div>
                  <h2 className="text-xl font-bold mb-2">Level Up Signups</h2>
                  <table className="w-full min-w-[900px] text-left border-collapse mb-8 overflow-x-auto">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="p-2">ID</th>
                        <th className="p-2">Contact Name</th>
                        <th className="p-2">Startup Name</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Phone</th>
                        <th className="p-2">LinkedIn</th>
                        <th className="p-2">Website</th>
                        <th className="p-2">About Startup</th>
                        <th className="p-2">Why Help</th>
                        <th className="p-2">Submitted At</th>
                      </tr>
                    </thead>
                    <tbody>
                      {levelupSignups.map((l: Record<string, unknown>) => (
                        <tr key={l.id as React.Key} className="border-b">
                          <td className="p-2">{l.id as string}</td>
                          <td className="p-2 font-semibold">{l.first_name as string} {l.last_name as string}</td>
                          <td className="p-2">{l.startup_name as string}</td>
                          <td className="p-2">{l.email as string}</td>
                          <td className="p-2">{l.phone as string}</td>
                          <td className="p-2">{l.linkedin as string}</td>
                          <td className="p-2">{l.website as string}</td>
                          <td className="p-2">{l.about_startup as string}</td>
                          <td className="p-2">{l.why_help as string}</td>
                          <td className="p-2">{l.submitted_at ? format(parseISO(l.submitted_at as string), "EEEE, MMMM do, h:mmaaa") + " EST" : ""}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {activeTab === "contact" && (
                <div>
                  <h2 className="text-xl font-bold mb-2">Contact Submissions</h2>
                  <div className="mb-4 flex items-center gap-2">
                    <label htmlFor="contact-replied-filter" className="font-medium text-gray-700">Filter:</label>
                    <select
                      id="contact-replied-filter"
                      className="border border-blue-100 rounded-md px-3 py-1 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      value={contactRepliedFilter}
                      onChange={e => setContactRepliedFilter(e.target.value)}
                    >
                      <option value="all">All</option>
                      <option value="unreplied">Only Unreplied</option>
                      <option value="replied">Only Replied</option>
                    </select>
                    {Object.keys(pendingReplied).length > 0 && (
                      <>
                        <Button
                          className="ml-4"
                          onClick={async () => {
                            try {
                              await Promise.all(
                                Object.entries(pendingReplied).map(([id, replied]) =>
                                  axios.patch(
                                    getAdminContactSubmissionUrl(id),
                                    { replied },
                                    { headers: { Authorization: `Bearer ${token}` } }
                                  )
                                )
                              );
                              setContactSubmissions((prev: Array<Record<string, unknown>>) =>
                                prev.map((x) =>
                                  pendingReplied[x.id as string] !== undefined
                                    ? { ...x, replied: pendingReplied[x.id as string] }
                                    : x
                                )
                              );
                              setPendingReplied({});
                            } catch {
                              alert("Failed to update replied status.");
                            }
                          }}
                        >
                          Save
                        </Button>
                        <Button
                          className="ml-2"
                          variant="outline"
                          onClick={() => setPendingReplied({})}
                        >
                          Cancel
                        </Button>
                      </>
                    )}
                  </div>
                  <table className="w-full min-w-[900px] text-left border-collapse mb-8 overflow-x-auto">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="p-2">ID</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Subject</th>
                        <th className="p-2">Message</th>
                        <th className="p-2">Submitted At</th>
                        <th className="p-2">Replied</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contactSubmissions
                        .filter((c: Record<string, unknown>) =>
                          contactRepliedFilter === "all" ? true :
                          contactRepliedFilter === "replied" ? (pendingReplied[c.id as string] !== undefined ? pendingReplied[c.id as string] : !!c.replied) :
                          !(pendingReplied[c.id as string] !== undefined ? pendingReplied[c.id as string] : !!c.replied)
                        )
                        .map((c: Record<string, unknown>) => (
                          <tr key={c.id as React.Key} className="border-b">
                            <td className="p-2">{c.id as string}</td>
                            <td className="p-2 font-semibold">{c.first_name as string} {c.last_name as string}</td>
                            <td className="p-2">{c.email as string}</td>
                            <td className="p-2">{c.subject as string}</td>
                            <td className="p-2">{c.message as string}</td>
                            <td className="p-2">{c.submitted_at ? format(parseISO(c.submitted_at as string), "EEEE, MMMM do, h:mmaaa") + " EST" : ""}</td>
                            <td className="p-2 text-center">
                              <input
                                type="checkbox"
                                checked={pendingReplied[c.id as string] !== undefined ? pendingReplied[c.id as string] : !!c.replied}
                                onChange={e => {
                                  setPendingReplied(prev => ({ ...prev, [c.id as string]: e.target.checked }));
                                }}
                                className="w-5 h-5 accent-blue-600 cursor-pointer"
                              />
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}
              {activeTab === "rsvp" && (
                <div>
                  <h2 className="text-xl font-bold mb-2">RSVPs</h2>
                  <div className="mb-4 flex items-center gap-2">
                    <label htmlFor="rsvp-event-filter" className="font-medium text-gray-700">Filter by Event:</label>
                    <select
                      id="rsvp-event-filter"
                      className="border border-blue-100 rounded-md px-3 py-1 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      value={rsvpEventFilter}
                      onChange={e => setRsvpEventFilter(e.target.value)}
                    >
                      <option value="all">All Events</option>
                      {events.map((event: Record<string, unknown>) => (
                        <option key={event.id as React.Key} value={event.id as string}>{event.title as string}</option>
                      ))}
                    </select>
                  </div>
                  <table className="w-full min-w-[900px] text-left border-collapse mb-8 overflow-x-auto">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="p-2">ID</th>
                        <th className="p-2">Event Name</th>
                        <th className="p-2">Contact Name</th>
                        <th className="p-2">Business Name</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Phone</th>
                        <th className="p-2"># Attendees</th>
                        <th className="p-2">Opt-in Call</th>
                        <th className="p-2">Submitted At</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rsvps
                        .filter((r: Record<string, unknown>) =>
                          rsvpEventFilter === "all" ||
                          (
                            typeof r.event === "object" && r.event !== null && "id" in r.event
                              ? String((r.event as { id: unknown }).id)
                              : String(r.event)
                          ) === rsvpEventFilter
                        )
                        .map((r: Record<string, unknown>) => (
                          <tr key={r.id as React.Key} className="border-b">
                            <td className="p-2">{r.id as string}</td>
                            <td className="p-2 font-semibold">
                              {typeof r.event === "object" && r.event !== null && "title" in r.event
                                ? (r.event as { title?: unknown }).title as string
                                : (events.find((e: Record<string, unknown>) => e.id === r.event)?.title as string || (r.event as string))}
                            </td>
                            <td className="p-2">{r.first_name as string} {r.last_name as string}</td>
                            <td className="p-2">{r.business_name as string}</td>
                            <td className="p-2">{r.email as string}</td>
                            <td className="p-2">{r.phone as string}</td>
                            <td className="p-2">{r.number_of_attendees as string}</td>
                            <td className="p-2">{r.opt_in_call ? "Yes" : "No"}</td>
                            <td className="p-2">{r.submitted_at ? format(parseISO(r.submitted_at as string), "EEEE, MMMM do, h:mmaaa") + " EST" : ""}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
} 