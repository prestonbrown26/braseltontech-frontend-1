// Base URLs - configured for Render deployment
// Use relative URLs for same-domain API requests when possible
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "/api";
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "";  // Empty string for same domain
export const ADMIN_URL = `${BACKEND_URL}/admin`;
export const FRONTEND_ADMIN_URL = `/admin`;  // This is the frontend admin page

// Log configured URLs in development
if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  console.log('API Base URL:', API_BASE_URL);
  console.log('Backend URL:', BACKEND_URL);
  console.log('Admin URL:', ADMIN_URL);
  console.log('Frontend Admin URL:', FRONTEND_ADMIN_URL);
  console.log('Using same domain?', BACKEND_URL === '');
}

export const API_ENDPOINTS = {
  contactSubmission: `${API_BASE_URL}/contact-submission/`,
  mentorSignup: `${API_BASE_URL}/mentor-signup/`,
  sponsorSignup: `${API_BASE_URL}/sponsor-signup/`,
  joinSignup: `${API_BASE_URL}/join-signup/`,
  levelUpSignup: `${API_BASE_URL}/levelup-signup/`,
  events: `${API_BASE_URL}/events/`,
  eventsAll: `${API_BASE_URL}/events/all/`,
  adminLogin: `${API_BASE_URL}/admin/login/`,
  adminLoginCors: `${API_BASE_URL}/admin/login-cors/`,  // CORS-enabled login endpoint
  adminLoginRaw: `${API_BASE_URL}/login-raw/`, // Only supported login-raw endpoint
  adminMentorSignups: `${API_BASE_URL}/admin/mentor-signups/`,
  adminSponsorSignups: `${API_BASE_URL}/admin/sponsor-signups/`,
  adminJoinSignups: `${API_BASE_URL}/admin/join-signups/`,
  adminLevelupSignups: `${API_BASE_URL}/admin/levelup-signups/`,
  adminContactSubmissions: `${API_BASE_URL}/admin/contact-submissions/`,
  adminRsvps: `${API_BASE_URL}/admin/rsvps/`,
};

// Helper function to redirect to frontend admin
// Now accepts router parameter so we can use Next.js navigation
export const redirectToAdmin = (router) => {
  console.log('Redirecting to frontend admin page');
  
  if (router) {
    // Use Next.js router if provided (preferred method)
    router.push(FRONTEND_ADMIN_URL);
  } else if (typeof window !== 'undefined') {
    // Fallback to direct navigation if router not provided
    console.log('Router not provided, using window.location');
    window.location.href = FRONTEND_ADMIN_URL;
  }
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