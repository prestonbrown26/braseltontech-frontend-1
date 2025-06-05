import axios from 'axios';
import { API_ENDPOINTS } from './api';

// Token management - ONLY using localStorage, NO cookies
const TOKEN_KEY = 'braseltontech_admin_token';
const TOKEN_EXPIRY_KEY = 'braseltontech_admin_token_expiry';

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Get the auth token from localStorage
export const getToken = () => {
  if (!isBrowser) return null;
  return localStorage.getItem(TOKEN_KEY);
};

// Store the token in localStorage only
export const setToken = (token) => {
  if (!isBrowser) return;
  
  // Store in localStorage
  localStorage.setItem(TOKEN_KEY, token);
  
  // Set expiry time (24 hours from now)
  const expiryTime = Date.now() + 24 * 60 * 60 * 1000;
  localStorage.setItem(TOKEN_EXPIRY_KEY, expiryTime.toString());
  
  console.log('Admin token saved to localStorage');
};

// Clear the token from localStorage
export const clearToken = () => {
  if (!isBrowser) return;
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_EXPIRY_KEY);
  console.log('Admin token cleared from localStorage');
};

// Check if the token is valid based on expiry time
export const isTokenValid = () => {
  if (!isBrowser) return false;
  
  const token = getToken();
  if (!token) {
    console.log('No token found in localStorage');
    return false;
  }
  
  const expiry = localStorage.getItem(TOKEN_EXPIRY_KEY);
  if (!expiry) {
    console.log('No token expiry found in localStorage');
    return false;
  }
  
  const isValid = parseInt(expiry, 10) > Date.now();
  console.log('Token valid?', isValid);
  return isValid;
};

// Create an axios instance with authentication header
export const createAuthAxios = () => {
  const instance = axios.create();
  
  // Add auth token to all requests
  instance.interceptors.request.use(
    (config) => {
      if (isBrowser) {
        const token = getToken();
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
          console.log('Adding auth token to request');
        } else {
          console.log('No auth token available for request');
        }
      }
      return config;
    },
    (error) => {
      console.error('Request interceptor error:', error);
      return Promise.reject(error);
    }
  );
  
  // Handle auth errors
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401 && isBrowser) {
        console.error('401 Unauthorized response received');
        // Clear token and redirect to login
        clearToken();
        window.location.href = '/login?auth=failed';
      }
      return Promise.reject(error);
    }
  );
  
  return instance;
};

// Verify the token is valid by making an API call
export const verifyToken = async () => {
  if (!isTokenValid()) {
    console.log('Token validation failed: Not valid by expiry');
    clearToken();
    return false;
  }
  
  try {
    console.log('Verifying token with API call...');
    const response = await axios.get(API_ENDPOINTS.eventsAll, {
      headers: { Authorization: `Bearer ${getToken()}` }
    });
    console.log('Token verification successful');
    return response.status === 200;
  } catch (error) {
    console.error("Token verification failed:", error);
    clearToken();
    return false;
  }
}; 