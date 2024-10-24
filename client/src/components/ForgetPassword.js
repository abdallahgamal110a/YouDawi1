import React from "react";
import Navbar from './Navbar';
import Footer_H from './Footer_H';
import './styles.css'; // Import your CSS file

function ForgetPassword() {
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
            <Footer_H />    
        </div>
    );
}

export default ForgetPassword;