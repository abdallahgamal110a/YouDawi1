import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import patientService from '../services/PatientService';
import Navbar from '../components/Navbar';


const Login = () => {
    const { register, handleSubmit } = useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const token = await patientService.loginPatient(data);
            // Redirect after successful login
            navigate('/dashboard'); // adjust the route based on your app
        } catch (error) {
            // Handle login error, display the error message
            setErrorMessage(error.message || 'Failed to login. Please check your credentials.');
        }
    };

    return (
        <div className="">
        <Navbar />
        <div className="mx-auto max-w-1/2  bg-white shadow-md p-10 mt-3">
            <div className="bg-blue-600 text-white text-center py-2 rounded-t-lg">
                <h2 className="text-lg font-semibold">Login</h2>
            </div>

            {errorMessage && (
                <div className="bg-red-100 text-red-600 border border-red-400 px-4 py-2 rounded mb-4">
                    {errorMessage}
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
                {/* Email */}
                <div>
                    <label className="block text-gray-700">
                        Your Email<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        {...register('email', { required: true })}
                        className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="block text-gray-700">
                        Password<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="password"
                        {...register('password', { required: true })}
                        className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-red-600 text-white py-2 rounded mt-4">
                    LOGIN
                </button>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center mt-2">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-gray-700">Remember Me</label>
                    <a href="/forgetpassword" className="ml-auto text-blue-500">
                        Forgot Your Password?
                    </a>
                </div>
            </form>

            {/* Divider */}
            <div className="flex items-center my-4">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-2 text-gray-500">or</span>
                <hr className="flex-grow border-gray-300" />
            </div>

            {/* Redirect to Register */}
            <div className="text-center mt-4">
                <span className="text-gray-700">New User?</span>
                <a href="/register" className="text-blue-500 ml-1">
                    Sign Up
                </a>
            </div>
        </div>

        </div>
    );
};

export default Login;
