import axios from 'axios';

const API_URL = 'http://localhost:5000/api/doctors'; // Update this with your actual API URL

// Register a new doctor
export const registerDoctor = async (doctorData) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  const response = await axios.post(`${API_URL}/register`, doctorData, config);
  return response.data;
};

// Doctor login
export const loginDoctor = async (loginData) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  const response = await axios.post(`${API_URL}/login`, loginData, config);
  return response.data;
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
