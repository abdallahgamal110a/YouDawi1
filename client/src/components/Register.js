import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import patientService from '../services/PatientService';
import Navbar from '../components/Navbar';


=======
import Navbar from './Navbar';
>>>>>>> edf9a11 (profile of doctors)

const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    const [gender, setGender] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const onSubmit = async (data) => {
        try {
            // Prepare data for API call
            const patientData = {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password,
                phone: data.phone,
                gender: gender,
                dataOfBirth: data.dataOfBirth,
                age: data.age,
                address: data.address,
                healthHistory: data.healthHistory
            };

            // Call the patient registration service
            const response = await patientService.registerPatient(patientData);
            console.log('Patient registered successfully:', response);

            // Reset form on successful registration
            reset();
            setSuccess(true);
            setError(null);
        } catch (err) {
            // Handle errors
            console.error('Error during registration:', err);
            setError(err.message || 'Registration failed');
            setSuccess(false);
        }
    };

    return (
<<<<<<< HEAD
        <div className="">
            <Navbar />
            <div className="mx-auto max-w-1/2 bg-white shadow-md p-10">
                <div className="bg-blue-600 text-white text-center py-2 rounded-t-lg">
                    <h2 className="text-lg font-semibold">Register</h2>
=======
        <div className='flex flex-col items-center justify-center'>

              <Navbar />
            <h2>Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <div>
                    <label>
                        <input
                            type="radio"
                            value="patient"
                            checked={role === 'patient'}
                            onChange={() => setRole('patient')}
                        />
                        Patient
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="doctor"
                            checked={role === 'doctor'}
                            onChange={() => setRole('doctor')}
                        />
                        Doctor
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="nurse"
                            checked={role === 'nurse'}
                            onChange={() => setRole('nurse')}
                        />
                        Nurse
                    </label>
                </div> */}

                <div>
                    <label>Name:</label>
                    <input type="text" {...register('name')} required />
>>>>>>> edf9a11 (profile of doctors)
                </div>

                {/* Success and error messages */}
                {success && <div className="text-green-600">Registration successful!</div>}
                {error && <div className="text-red-600">Error: {error}</div>}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
                    {/* First Name */}
                    <div>
                        <label className="block text-gray-700">First Name<span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            {...register('firstName')}
                            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="block text-gray-700">Last Name<span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            {...register('lastName')}
                            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="block text-gray-700">Gender<span className="text-red-500">*</span></label>
                        <div className="flex space-x-4 mt-2">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    value="male"
                                    {...register('gender')}
                                    checked={gender === 'male'}
                                    onChange={() => setGender('male')}
                                    className="form-radio"
                                />
                                <span className="text-gray-700">Male</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    value="female"
                                    {...register('gender')}
                                    checked={gender === 'female'}
                                    onChange={() => setGender('female')}
                                    className="form-radio"
                                />
                                <span className="text-gray-700">Female</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    value="other"
                                    {...register('gender')}
                                    checked={gender === 'other'}
                                    onChange={() => setGender('other')}
                                    className="form-radio"
                                />
                                <span className="text-gray-700">Other</span>
                            </label>
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700">Email<span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            {...register('email')}
                            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-gray-700">Phone<span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            {...register('phone')}
                            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700">Password<span className="text-red-500">*</span></label>
                        <input
                            type="password"
                            {...register('password')}
                            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-red-600 text-white py-2 rounded mt-4"
                    >
                        REGISTER
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-2 text-gray-500">or</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Redirect to Login */}
                <div className="text-center mt-4">
                    <span className="text-gray-700">Already have an account?</span>
                    <Link to="/login" className="text-blue-500 ml-1">Sign In</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
