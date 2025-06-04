// Test script to check backend connectivity
const axios = require('axios');

// Replace with your actual API URL
const API_URL = 'https://braseltontech-backend-1.onrender.com/api';

async function testBackend() {
  console.log('Testing backend connectivity...');
  
  try {
    // Test public endpoint
    const eventsResponse = await axios.get(`${API_URL}/events/`);
    console.log('✅ Events endpoint is working!');
    console.log(`Found ${eventsResponse.data.length} events`);
    
    // Try admin login
    const username = process.argv[2];
    const password = process.argv[3];
    
    if (username && password) {
      try {
        console.log('Attempting admin login...');
        const loginResponse = await axios.post(`${API_URL}/admin/login/`, {
          username,
          password
        });
        
        console.log('✅ Admin login successful!');
        console.log('Token received:', loginResponse.data.access.substring(0, 20) + '...');
        
        // Test protected endpoint with token
        try {
          const token = loginResponse.data.access;
          const adminResponse = await axios.get(`${API_URL}/admin/mentor-signups/`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          
          console.log('✅ Admin API access is working!');
          console.log(`Found ${adminResponse.data.length} mentor signups`);
        } catch (error) {
          console.error('❌ Admin API access failed:', error.message);
          if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
          }
        }
      } catch (error) {
        console.error('❌ Admin login failed:', error.message);
        if (error.response) {
          console.error('Status:', error.response.status);
          console.error('Data:', error.response.data);
        }
      }
    } else {
      console.log('No username/password provided. Skipping admin tests.');
      console.log('Usage: node test-backend.js <username> <password>');
    }
  } catch (error) {
    console.error('❌ Backend test failed:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    }
  }
}

testBackend(); 