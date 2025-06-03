export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api";

export const API_ENDPOINTS = {
  contactSubmission: `${API_BASE_URL}/contact-submission/`,
  mentorSignup: `${API_BASE_URL}/mentor-signup/`,
  sponsorSignup: `${API_BASE_URL}/sponsor-signup/`,
  joinSignup: `${API_BASE_URL}/join-signup/`,
  levelUpSignup: `${API_BASE_URL}/levelup-signup/`,
  events: `${API_BASE_URL}/events/`,
  eventsAll: `${API_BASE_URL}/events/all/`,
  adminLogin: `${API_BASE_URL}/admin/login/`,
  adminMentorSignups: `${API_BASE_URL}/admin/mentor-signups/`,
  adminSponsorSignups: `${API_BASE_URL}/admin/sponsor-signups/`,
  adminJoinSignups: `${API_BASE_URL}/admin/join-signups/`,
  adminLevelupSignups: `${API_BASE_URL}/admin/levelup-signups/`,
  adminContactSubmissions: `${API_BASE_URL}/admin/contact-submissions/`,
  adminRsvps: `${API_BASE_URL}/admin/rsvps/`,
};

// Dynamic endpoint helpers
export const getEventUrl = (slug) => `${API_BASE_URL}/events/${slug}/`;
export const getEventUpdateUrl = (slug) => `${API_BASE_URL}/events/${slug}/update/`;
export const getEventDeleteUrl = (id) => `${API_BASE_URL}/events/${id}/delete/`;
export const getEventRsvpUrl = (slug) => `${API_BASE_URL}/events/${slug}/rsvp/`;
export const getAdminContactSubmissionUrl = (id) => `${API_BASE_URL}/admin/contact-submissions/${id}/`;

export async function fetchFromAPI(endpoint, options = {}) {
  const res = await fetch(`${API_BASE_URL}/api/${endpoint}`, options);
  if (!res.ok) {
    throw new Error('API request failed');
  }
  return res.json();
}