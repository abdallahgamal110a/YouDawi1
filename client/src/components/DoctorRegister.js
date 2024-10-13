import React, { useState } from 'react';
import { registerDoctor } from '../services/DoctorService';
import { Link } from 'react-router-dom';

const DoctorRegisterForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        adresse: '',
        city: '',
        phone: '',
        specialization: '',
        schedule: [],
    });

    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerDoctor(formData);
            setMessage('Doctor registered successfully!');
        } catch (error) {
            setMessage('Error registering doctor: ' + error.response?.data?.message || error.message);
        }
    };

    return (
        <div className="max-w-50 mx-auto bg-white p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Register Doctor</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="firstName"
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    required
                />
                <input
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    required
                />
                <input
                    type="password"
                    name="password"
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    required
                />

                {/* Specialization Select Dropdown */}
                <select
                    name="specialization"
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    required
                >
                    <option value="" disabled>Select Specialization</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Orthopedics">Orthopedics</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="General Practice">General Practice</option>
                </select>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors"
                >
                    Register
                </button>
            </form>
            {message && (
                <p className="mt-4 text-center text-gray-700">{message}</p>
            )}

            <div className="flex justify-center">
                Or
            </div>
            <div className='flex justify-center'><Link to="/doctor-login">Login</Link></div>
        </div>
    );
};

export default DoctorRegisterForm;
