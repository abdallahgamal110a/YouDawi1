import React, { useState } from 'react';
import Navbar from './Navbar';
import FooterH from './Footer_H';
import './styles.css'; // Import your CSS file
import { requestResetPassword as DoctorRequestResetPassword } from '../services/DoctorService';
import patientService from '../services/PatientService'; // Named import
import nurseService from '../services/NurseService';  // Named import






function ForgetPassword({ role }) {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            // if (role === 'doctor') {
            //     await DoctorRequestResetPassword(email);
            // } else if (role === 'patient') {
            await patientService.requestResetPassword(email);  // Use the named import
            // } else if (role === 'nurse') {
            //     await nurseService.requestResetPassword(email);  // Use the named import
            // } else {
            //     throw new Error('Invalid role specified.');
            // }
            setSuccess('Password reset email sent successfully.');
        } catch (err) {
            setError(`Error: ${err.message || 'Failed to send password reset email.'}`);
        }
    };

    return (
        <div id="root">
            <Navbar />
            <main>
                <form className="space-y-4 mt-4 flex flex-col items-center">
                    <div className="flex justify-between w-80 mb-4">
                        <label className="text-4xl text-gray-700 mr-4">Enter Your Email:</label>
                        <input className="w-3/4 h-8 border border-gray-700 p-2 focus:outline-none focus:border-blue-500" />
                    </div>
                    <button type="submit" className="w-30 h-7 bg-red-600 text-white py-2 rounded">Submit</button>
                </form>
            </main>
            <FooterH />
        </div>
    );
}

export default ForgetPassword;
