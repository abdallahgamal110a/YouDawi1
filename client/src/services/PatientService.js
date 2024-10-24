import axios from 'axios';

// Base URL for API
const API_URL = 'http://localhost:5000/api/patients'; // Update this with your actual API URL

// PatientService object containing all functions related to patient operations
const patientService = {

    /**
     * Register a new patient
     * @param {Object} patientData - Data for registering the patient
     * @returns {Promise} - Resolves to the new patient's data
     */
    registerPatient: async (patientData) => {
        try {
            const response = await axios.post(`${API_URL}/register`, patientData);
            return response.data;
        } catch (error) {
            console.error('Error registering patient:', error.response.data);
            throw error.response.data; // Propagate the error for handling
        }
    },

    /**
     * Log in a patient
     * @param {Object} loginData - Data for logging in (email and password)
     * @returns {Promise} - Resolves to the token if login is successful
     */
    loginPatient: async (loginData) => {
        try {
            const response = await axios.post(`${API_URL}/login`, loginData);
            const token = response.data.data.token;

            // Store the token in localStorage (you can adjust as needed)
            localStorage.setItem('patientToken', token);

            return token;
        } catch (error) {
            console.error('Error logging in patient:', error.response.data);
            throw error.response.data; // Propagate the error for handling
        }
    },

    /**
     * Get the logged-in patient's profile
     * @param {String} token - JWT token for authentication
     * @returns {Promise} - Resolves to the patient's profile data
     */
    getPatientProfile: async (token) => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            const response = await axios.get(`${API_URL}/profile`, config);
            return response.data.data.patient;
        } catch (error) {
            console.error('Error fetching patient profile:', error.response.data);
            throw error.response.data; // Propagate the error for handling
        }
    },

    /**
     * Get a paginated list of patients (Admin use case, for example)
     * @param {Object} params - Pagination params (limit and page)
     * @returns {Promise} - Resolves to the list of patients and metadata
     */
    getAllPatients: async (params) => {
        try {
            const response = await axios.get(`${API_URL}`, { params });
            return response.data.data;
        } catch (error) {
            console.error('Error fetching patients:', error.response.data);
            throw error.response.data;
        }
    },

    /**
     * Request password reset
     * @param {String} email - Patient's email to request a password reset
     * @returns {Promise} - Resolves when the password reset email is sent
     */
    requestResetPassword: async (email) => {
        try {
            const response = await axios.post(`${API_URL}/requestResetPassword`, { email });
            return response.data;
        } catch (error) {
            console.error('Error requesting password reset:', error.response.data);
            throw error.response.data;
        }
    },

    /**
     * Reset password using the reset token
     * @param {Object} resetData - Data for resetting the password (token and new password)
     * @returns {Promise} - Resolves when the password is successfully reset
     */
    resetPassword: async (resetData) => {
        try {
            const response = await axios.post(`${API_URL}/reset-password`, resetData);
            return response.data;
        } catch (error) {
            console.error('Error resetting password:', error.response.data);
            throw error.response.data;
        }
    },

    /**
     * Update patient profile
     * @param {Object} updateData - Data for updating the patient profile
     * @param {String} token - JWT token for authentication
     * @returns {Promise} - Resolves to the updated patient data
     */
    updatePatientProfile: async (updateData, token) => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            const response = await axios.put(`${API_URL}/profile`, updateData, config);
            return response.data;
        } catch (error) {
            console.error('Error updating patient profile:', error.response.data);
            throw error.response.data;
        }
    }
};

export default patientService;
