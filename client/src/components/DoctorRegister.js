import React, { useState } from 'react';
import { registerDoctor } from '../services/DoctorService';

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
    schedule: [], // Assume schedule is an array
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
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" onChange={handleInputChange} placeholder="First Name" />
      <input type="text" name="lastName" onChange={handleInputChange} placeholder="Last Name" />
      <input type="email" name="email" onChange={handleInputChange} placeholder="Email" />
      <input type="password" name="password" onChange={handleInputChange} placeholder="Password" />
      <input type="text" name="specialization" onChange={handleInputChange} placeholder="Specialization" />
      {/* Add other form fields as needed */}
      <button type="submit">Register</button>
      <p>{message}</p>
    </form>
  );
};

export default DoctorRegisterForm;
