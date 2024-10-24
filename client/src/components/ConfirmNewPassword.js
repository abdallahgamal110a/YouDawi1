import React from 'react';

function ConfirmNewPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-35">

    <div className="flex w-4/5 h-4/5 max-h-70 bg-white opacity-90 rounded-2xl shadow-lg overflow-hidden">
        <div className="w-1/2 p-8">
            <h2 className="text-5xl font-bold text-primary-30 text-center mt-5 mb-4">Change Password</h2>
            <p className="text-3xl text-primary-30 text-center mb-4">Enter the new password below</p>


            <form className="space-y-4">
                <div>
                    <label className="block mb-1 text-gray-700">
                    Change Password<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="password"
                        className="w-full px-2 py-1 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-primary-30 text-white py-1 rounded-lg font-semibold shadow-lg hover:bg-[#00263d] transition">
                Change Password
                </button>

            </form>
            </div>

        <div className="w-1/2 relative">
            <img
                src="trafalgar-illustration sec02 1.png"
                alt="Transparent overlay"
                className="relative z-10 mx-auto my-8 opacity-75"
            />
        </div>
    </div>
</div>
  );
}

export default ConfirmNewPassword;
