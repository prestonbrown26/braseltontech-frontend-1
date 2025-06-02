export const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchFromAPI(endpoint, options = {}) {
  const res = await fetch(`${API_URL}/api/${endpoint}`, options);
  if (!res.ok) {
    throw new Error('API request failed');
  }
  return res.json();
}