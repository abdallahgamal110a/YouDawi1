import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import patientService from '../services/PatientService';
import Navbar from '../components/Navbar';

const Register = () => {
        const { register, handleSubmit, reset } = useForm();
        const [gender, setGender] = useState('');
        const [error, setError] = useState(null);
        const [success, setSuccess] = useState(false);
        const [avatar, setAvatar] = useState(null); // For avatar file upload

        const onSubmit = async(data) => {
            const formData = new FormData(); // Using FormData to handle file uploads

            // Append form data
            formData.append('firstName', data.firstName);
            formData.append('lastName', data.lastName);
            formData.append('email', data.email);
            formData.append('password', data.password);
            formData.append('phone', data.phone);
            formData.append('gender', gender);
            formData.append('dateOfBirth', data.dateOfBirth); // Updated field name
            formData.append('age', data.age);
            formData.append('address', data.address);
            formData.append('healthHistory', data.healthHistory);
            if (avatar) formData.append('avatar', avatar); // Append avatar if uploaded

            try {
                // Call the patient registration service
                const response = await patientService.registerPatient(formData);
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

        return ( <
                div className = "min-h-screen flex items-center justify-center bg-primary-35" >
                <
                div className = "flex w-4/5 h-4/5 max-h-70 bg-white opacity-90 rounded-2xl shadow-lg overflow-hidden" >
                <
                div className = "w-1/2 p-8" >
                <
                h2 className = "text-5xl font-bold text-primary-30 text-center mb-1" > Patient Registration < /h2>

                { /* Success and error messages */ } {
                    success && < div className = "text-green-600" > Registration successful! < /div>} {
                        error && < div className = "text-red-600" > Error: { error } < /div>}

                        <
                        form onSubmit = { handleSubmit(onSubmit) }
                        className = "space-y-4"
                        encType = "multipart/form-data" > { /* First Name */ } <
                            div >
                            <
                            label className = "block mb-1 text-gray-700" > First Name < span className = "text-red-500" > * < /span></label >
                            <
                            input
                        type = "text" {...register('firstName') }
                        className = "w-full px-2 py-1 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                            /
                            >
                            <
                            /div>

                        { /* Last Name */ } <
                        div >
                            <
                            label className = "block mb-1 text-gray-700" > Last Name < span className = "text-red-500" > * < /span></label >
                            <
                            input
                        type = "text" {...register('lastName') }
                        className = "w-full px-2 py-1 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                            /
                            >
                            <
                            /div>

                        { /* Gender */ } <
                        div >
                            <
                            label className = "block mb-1 text-gray-700" > Gender < span className = "text-red-500" > * < /span></label >
                            <
                            div className = "flex space-x-4 mt-2" >
                            <
                            label className = "flex items-center space-x-2" >
                            <
                            input
                        type = "radio"
                        value = "male" {...register('gender') }
                        checked = { gender === 'male' }
                        onChange = {
                            () => setGender('male') }
                        className = "form-radio " /
                            >
                            <
                            span className = "text-gray-700" > Male < /span> <
                            /label> <
                            label className = "flex items-center space-x-2" >
                            <
                            input
                        type = "radio"
                        value = "female" {...register('gender') }
                        checked = { gender === 'female' }
                        onChange = {
                            () => setGender('female') }
                        className = "form-radio" /
                            >
                            <
                            span className = "text-gray-700" > Female < /span> <
                            /label> <
                            label className = "flex items-center space-x-2" >
                            <
                            input
                        type = "radio"
                        value = "other" {...register('gender') }
                        checked = { gender === 'other' }
                        onChange = {
                            () => setGender('other') }
                        className = "form-radio" /
                            >
                            <
                            span className = "text-gray-700" > Other < /span> <
                            /label> <
                            /div> <
                            /div>

                        { /* Email */ } <
                        div >
                            <
                            label className = "block mb-1 text-gray-700" > Email < span className = "text-red-500" > * < /span></label >
                            <
                            input
                        type = "email" {...register('email') }
                        className = "w-full px-2 py-1 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                            /
                            >
                            <
                            /div>

                        { /* Phone */ } <
                        div >
                            <
                            label className = "block mb-1 text-gray-700" > Phone < span className = "text-red-500" > * < /span></label >
                            <
                            input
                        type = "text" {...register('phone') }
                        className = "w-full px-2 py-1 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                            /
                            >
                            <
                            /div>

                        { /* Date of Birth */ } <
                        div >
                            <
                            label className = "block mb-1 text-gray-700" > Date of Birth < span className = "text-red-500" > * < /span></label >
                            <
                            input
                        type = "date" {...register('dateOfBirth') } // Updated field name
                        className = "w-full px-2 py-1 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                            /
                            >
                            <
                            /div>

                        { /* Address */ } <
                        div >
                            <
                            label className = "block mb-1 text-gray-700" > Address < span className = "text-red-500" > * < /span></label >
                            <
                            input
                        type = "text" {...register('address') }
                        className = "w-full px-2 py-1 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                            /
                            >
                            <
                            /div>

                        { /* Health History */ } <
                        div >
                            <
                            label className = "block mb-1 text-gray-700" > Health History < /label> <
                            textarea {...register('healthHistory') }
                        className = "w-full px-2 py-1 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" /
                            >
                            <
                            /div>

                        { /* Avatar */ } <
                        div >
                            <
                            label className = "block mb-1 text-gray-700" > Upload Avatar < /label> <
                            input
                        type = "file"
                        onChange = {
                            (e) => setAvatar(e.target.files[0]) }
                        className = "w-full px-2 py-1 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" /
                            >
                            <
                            /div>

                        { /* Submit Button */ } <
                        button
                        type = "submit"
                        className = "w-full bg-primary-30 text-white py-1 rounded-lg font-semibold shadow-lg hover:bg-[#00263d] transition" >
                            REGISTER <
                            /button> <
                            /form> <
                            div className = "flex items-center my-2" >
                            <
                            hr className = "flex-grow border-gray-300" / >
                            <
                            span className = "mx-2 text-gray-500" > or < /span> <
                            hr className = "flex-grow border-gray-300" / >
                            <
                            /div> { /* Redirect to Login */ } <
                            div className = "text-center mt-4" >
                            <
                            span className = "text-gray-700" > Already have an account ? < /span> <
                            Link to = "/login"
                        className = "text-blue-500 ml-1" > Sign In < /Link> <
                            /div> <
                            /div> <
                            div className = "w-1/2 relative" >
                            <
                            img
                        src = "trafalgar-illustration sec02 1.png"
                        alt = "Transparent overlay"
                        className = "relative z-10 mx-auto my-8 opacity-75" /
                            >
                            <
                            /div> <
                            /div> <
                            /div>
                    );
                };

                export default Register;