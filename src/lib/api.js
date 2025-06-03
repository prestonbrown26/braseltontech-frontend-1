export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api";

export const API_ENDPOINTS = {
  contactSubmission: `${API_BASE_URL}/contact-submission/`,
  mentorSignup: `${API_BASE_URL}/mentor-signup/`,
  sponsorSignup: `${API_BASE_URL}/sponsor-signup/`,
  joinSignup: `${API_BASE_URL}/join-signup/`,
  levelUpSignup: `${API_BASE_URL}/levelup-signup/`,
  // Add other endpoints as needed
};

export async function fetchFromAPI(endpoint, options = {}) {
  const res = await fetch(`${API_BASE_URL}/api/${endpoint}`, options);
  if (!res.ok) {
    throw new Error('API request failed');
  }
  return res.json();
}