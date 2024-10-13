import axios from 'axios';

const API_URL = 'http://localhost:5000/api/doctors'; // todo: Update this

// Register a new doctor
export const registerDoctor = async (doctorData) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  const response = await axios.post(`${API_URL}/register`, doctorData, config);
  return response.data;
};

// Doctor login
export const loginDoctor = async (loginData) => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const response = await axios.post(`${API_URL}/login`, loginData, config);

    // Ensure the server is returning a valid JSON response
    if (response.headers['content-type'].includes('application/json')) {
      return response.data;  // Return the JSON response
    } else {
      throw new Error('Expected JSON response but received a different format.');
    }
  } catch (error) {
    // Log the error for debugging
    console.error('Login error:', error.response || error.message);

    // Handle specific error scenarios
    if (error.response) {
      // Server responded with a status code that is not in the range of 2xx
      throw new Error(error.response.data?.message || 'Error logging in');
    } else if (error.request) {
      // Request was made but no response was received
      throw new Error('No response from server. Please try again.');
    } else {
      // Something else happened in setting up the request
      throw new Error('Error: ' + error.message);
    }
  }
};


// Get all doctors
export const getAllDoctors = async (page = 1, limit = 5) => {
  const response = await axios.get(`${API_URL}?page=${page}&limit=${limit}`);
  return response.data;
};

// Get doctor by specialty
export const getDoctorsBySpecialty = async (specialty) => {
  const response = await axios.get(`${API_URL}/specialty`, { params: { specialty } });
  return response.data;
};

// More functions for other doctor operations can be added similarly...
