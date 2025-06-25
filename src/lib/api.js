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

// Helper function to get the correct API URL
const getApiUrl = (endpoint) => {
  // If we have a backend URL, use it directly
  if (BACKEND_URL && BACKEND_URL !== '') {
    return `${BACKEND_URL}/api${endpoint}`;
  }
  // Otherwise use the API_BASE_URL (which will be proxied by Next.js)
  return `${API_BASE_URL}${endpoint}`;
};

export const API_ENDPOINTS = {
  contactSubmission: getApiUrl('/contact-submission/'),
  mentorSignup: getApiUrl('/mentor-signup/'),
  sponsorSignup: getApiUrl('/sponsor-signup/'),
  levelUpSignup: getApiUrl('/level-up-signup/'),
  aiLearningEventRequest: getApiUrl('/ai-learning-event-request/'),
  events: getApiUrl('/events/'),
  eventsAll: getApiUrl('/events/all/'),
  adminLogin: getApiUrl('/admin/login/'),
  adminLoginCors: getApiUrl('/admin/login-cors/'),  // CORS-enabled login endpoint
  adminLoginRaw: getApiUrl('/login-raw/'), // Only supported login-raw endpoint
  adminMentorSignups: getApiUrl('/admin/mentor-signups/'),
  adminSponsorSignups: getApiUrl('/admin/sponsor-signups/'),
  adminLevelupSignups: getApiUrl('/admin/level-up-signups/'),
  adminAILearningEventRequests: getApiUrl('/admin/ai-learning-event-requests/'),
  adminContactSubmissions: getApiUrl('/admin/contact-submissions/'),
  adminRsvps: getApiUrl('/admin/rsvps/'),
  adminEventFeedback: getApiUrl('/admin/event-feedback/'),
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
export const getEventUrl = (slug) => getApiUrl(`/events/${slug}/`);
export const getEventUpdateUrl = (slug) => getApiUrl(`/events/${slug}/update/`);
export const getEventDeleteUrl = (id) => getApiUrl(`/events/${id}/delete/`);
export const getEventRsvpUrl = (slug) => getApiUrl(`/events/${slug}/rsvp/`);
export const getAdminContactSubmissionUrl = (id) => getApiUrl(`/admin/contact-submissions/${id}/`);

export async function fetchFromAPI(endpoint, options = {}) {
  const res = await fetch(`${API_BASE_URL}/api/${endpoint}`, options);
  if (!res.ok) {
    throw new Error('API request failed');
  }
  return res.json();
}