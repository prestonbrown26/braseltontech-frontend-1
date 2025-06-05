import Cookies from 'js-cookie';
import axios from 'axios';
import { API_ENDPOINTS } from './api';

// Token management
const TOKEN_KEY = 'admin_token';
const TOKEN_EXPIRY_KEY = 'admin_token_expiry';

export const getToken = () => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(TOKEN_KEY);
};

export const getTokenExpiry = () => {
  if (typeof window === 'undefined') return null;
  const expiry = localStorage.getItem(TOKEN_EXPIRY_KEY);
  return expiry ? parseInt(expiry, 10) : null;
};

export const setToken = (token) => {
  if (typeof window === 'undefined') return;
  
  // Store in localStorage
  localStorage.setItem(TOKEN_KEY, token);
  
  // Set expiry time (24 hours from now)
  const expiryTime = Date.now() + 24 * 60 * 60 * 1000;
  localStorage.setItem(TOKEN_EXPIRY_KEY, expiryTime.toString());
  
  // Also store in cookies for middleware
  Cookies.set(TOKEN_KEY, token, { 
    expires: 1, // 1 day
    path: '/',
    secure: true,
    sameSite: 'lax'
  });
};

export const clearToken = () => {
  if (typeof window === 'undefined') return;
  
  // Clear from localStorage
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_EXPIRY_KEY);
  
  // Clear from cookies
  Cookies.remove(TOKEN_KEY, { path: '/' });
};

export const isTokenValid = () => {
  const token = getToken();
  const expiry = getTokenExpiry();
  
  if (!token || !expiry) return false;
  
  // Check if token is expired
  const now = Date.now();
  return expiry > now;
};

// Create an axios instance with authentication
export const createAuthAxios = () => {
  const instance = axios.create();
  
  // Add request interceptor to add token to all requests
  instance.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  
  // Add response interceptor to handle auth errors
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      // If unauthorized, clear tokens and redirect to login
      if (error.response && error.response.status === 401) {
        clearToken();
        // Only redirect if we're in the browser
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
      }
      return Promise.reject(error);
    }
  );
  
  return instance;
};

// Verify token is valid by making an API call
export const verifyToken = async () => {
  if (!isTokenValid()) {
    clearToken();
    return false;
  }
  
  try {
    const token = getToken();
    await axios.get(API_ENDPOINTS.eventsAll, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return true;
  } catch {
    clearToken();
    return false;
  }
}; 