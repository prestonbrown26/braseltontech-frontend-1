"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { format, parseISO } from "date-fns";
import { API_ENDPOINTS, getEventDeleteUrl, getAdminContactSubmissionUrl } from "@/lib/api";

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
  const [pendingReplied, setPendingReplied] = useState<{ [id: number]: boolean }>({});

  useEffect(() => {
    const t = localStorage.getItem("admin_token");
    if (!t) {
      router.push("/login");
      return;
    }
    setToken(t);
  }, [router]);

  useEffect(() => {
    if (!token) return;
    setLoading(true);
    setError("");
    async function fetchAll() {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        const [eventsRes, mentorRes, sponsorRes, joinRes, levelupRes, contactRes, rsvpRes] = await Promise.all([
          axios.get(API_ENDPOINTS.eventsAll, { headers }),
          axios.get(API_ENDPOINTS.adminMentorSignups, { headers }),
          axios.get(API_ENDPOINTS.adminSponsorSignups, { headers }),
          axios.get(API_ENDPOINTS.adminJoinSignups, { headers }),
          axios.get(API_ENDPOINTS.adminLevelupSignups, { headers }),
          axios.get(API_ENDPOINTS.adminContactSubmissions, { headers }),
          axios.get(API_ENDPOINTS.adminRsvps, { headers }),
        ]);
        setEvents(eventsRes.data);
        setMentorSignups(mentorRes.data);
        setSponsorSignups(sponsorRes.data);
        setJoinSignups(joinRes.data);
        setLevelupSignups(levelupRes.data);
        setContactSubmissions(contactRes.data);
        setRsvps(rsvpRes.data);
      } catch {
        setError("Failed to load admin data. Please check your login or try again.");
      } finally {
        setLoading(false);
      }
    }
    fetchAll();
  }, [token]);

  if (!token) return null;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#f0f6ff] to-[#a7c7ff]">
      <NavBar />
      <main className="flex-1 py-12 px-4">
        <div className="max-w-[98vw] md:max-w-screen-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-blue-100 overflow-x-auto">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Admin Dashboard</h1>
          <div className="flex gap-4 justify-center mb-8">
            <Button onClick={() => setActiveTab("events")} variant={activeTab === "events" ? "default" : "outline"}>Events</Button>
            <Button onClick={() => setActiveTab("mentor")} variant={activeTab === "mentor" ? "default" : "outline"}>Mentor Signups</Button>
            <Button onClick={() => setActiveTab("sponsor")} variant={activeTab === "sponsor" ? "default" : "outline"}>Sponsor Signups</Button>
            <Button onClick={() => setActiveTab("join")} variant={activeTab === "join" ? "default" : "outline"}>Join Signups</Button>
            <Button onClick={() => setActiveTab("levelup")} variant={activeTab === "levelup" ? "default" : "outline"}>Level Up</Button>
            <Button onClick={() => setActiveTab("contact")} variant={activeTab === "contact" ? "default" : "outline"}>Contact</Button>
            <Button onClick={() => setActiveTab("rsvp")} variant={activeTab === "rsvp" ? "default" : "outline"}>RSVPs</Button>
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
                          <td className="p-2 font-semibold">{event.title}</td>
                          <td className="p-2">{event.date ? formatEventDate(event.date) : ""}</td>
                          <td className="p-2">{event.start_time ? formatEventTime(event.start_time) : ""}</td>
                          <td className="p-2">{event.end_time ? formatEventTime(event.end_time) : ""}</td>
                          <td className="p-2">{event.location_name}</td>
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
                          <td className="p-2">{m.id}</td>
                          <td className="p-2 font-semibold">{m.first_name} {m.last_name}</td>
                          <td className="p-2">{m.email}</td>
                          <td className="p-2">{m.phone}</td>
                          <td className="p-2">{m.linkedin}</td>
                          <td className="p-2">{m.company}</td>
                          <td className="p-2">{m.areas_of_expertise}</td>
                          <td className="p-2 max-w-xs truncate" title={m.why_mentor}>{m.why_mentor}</td>
                          <td className="p-2">{m.submitted_at ? format(parseISO(m.submitted_at), "EEEE, MMMM do, h:mmaaa") + " EST" : ""}</td>
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
                          <td className="p-2">{s.id}</td>
                          <td className="p-2 font-semibold">{s.first_name} {s.last_name}</td>
                          <td className="p-2">{s.business_name}</td>
                          <td className="p-2">{s.email}</td>
                          <td className="p-2">{s.phone}</td>
                          <td className="p-2">{s.address}</td>
                          <td className="p-2">{s.website}</td>
                          <td className="p-2">{s.submitted_at ? format(parseISO(s.submitted_at), "EEEE, MMMM do, h:mmaaa") + " EST" : ""}</td>
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
                          <td className="p-2">{j.id}</td>
                          <td className="p-2 font-semibold">{j.first_name} {j.last_name}</td>
                          <td className="p-2">{j.email}</td>
                          <td className="p-2">{j.phone}</td>
                          <td className="p-2">{j.linkedin}</td>
                          <td className="p-2 max-w-xs truncate" title={j.about}>{j.about}</td>
                          <td className="p-2 max-w-xs truncate" title={j.why_join}>{j.why_join}</td>
                          <td className="p-2">{j.submitted_at ? format(parseISO(j.submitted_at), "EEEE, MMMM do, h:mmaaa") + " EST" : ""}</td>
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
                          <td className="p-2">{l.id}</td>
                          <td className="p-2 font-semibold">{l.first_name} {l.last_name}</td>
                          <td className="p-2">{l.startup_name}</td>
                          <td className="p-2">{l.email}</td>
                          <td className="p-2">{l.phone}</td>
                          <td className="p-2">{l.linkedin}</td>
                          <td className="p-2">{l.website}</td>
                          <td className="p-2 max-w-xs truncate" title={l.about_startup}>{l.about_startup}</td>
                          <td className="p-2 max-w-xs truncate" title={l.why_help}>{l.why_help}</td>
                          <td className="p-2">{l.submitted_at ? format(parseISO(l.submitted_at), "EEEE, MMMM do, h:mmaaa") + " EST" : ""}</td>
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
                              setContactSubmissions((prev: Array<Record<string, unknown>>) => prev.map((x) =>
                                pendingReplied[x.id] !== undefined ? { ...x, replied: pendingReplied[x.id] } : x
                              ));
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
                          contactRepliedFilter === "replied" ? (pendingReplied[c.id] !== undefined ? pendingReplied[c.id] : !!c.replied) :
                          !(pendingReplied[c.id] !== undefined ? pendingReplied[c.id] : !!c.replied)
                        )
                        .map((c: Record<string, unknown>) => (
                          <tr key={c.id} className="border-b">
                            <td className="p-2">{c.id}</td>
                            <td className="p-2 font-semibold">{c.first_name} {c.last_name}</td>
                            <td className="p-2">{c.email}</td>
                            <td className="p-2">{c.subject}</td>
                            <td className="p-2 max-w-xs truncate" title={c.message}>{c.message}</td>
                            <td className="p-2">{c.submitted_at ? format(parseISO(c.submitted_at), "EEEE, MMMM do, h:mmaaa") + " EST" : ""}</td>
                            <td className="p-2 text-center">
                              <input
                                type="checkbox"
                                checked={pendingReplied[c.id] !== undefined ? pendingReplied[c.id] : !!c.replied}
                                onChange={e => {
                                  setPendingReplied(prev => ({ ...prev, [c.id]: e.target.checked }));
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
                        <option key={event.id} value={event.id}>{event.title}</option>
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
                        .filter((r: Record<string, unknown>) => rsvpEventFilter === "all" || String(r.event?.id ?? r.event) === rsvpEventFilter)
                        .map((r: Record<string, unknown>) => (
                          <tr key={r.id} className="border-b">
                            <td className="p-2">{r.id}</td>
                            <td className="p-2 font-semibold">{r.event?.title || (events.find((e: Record<string, unknown>) => e.id === r.event)?.title || r.event)}</td>
                            <td className="p-2">{r.first_name} {r.last_name}</td>
                            <td className="p-2">{r.business_name}</td>
                            <td className="p-2">{r.email}</td>
                            <td className="p-2">{r.phone}</td>
                            <td className="p-2">{r.number_of_attendees}</td>
                            <td className="p-2">{r.opt_in_call ? "Yes" : "No"}</td>
                            <td className="p-2">{r.submitted_at ? format(parseISO(r.submitted_at), "EEEE, MMMM do, h:mmaaa") + " EST" : ""}</td>
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