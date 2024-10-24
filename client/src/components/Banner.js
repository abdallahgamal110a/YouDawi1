import React, { useState } from "react";
import myImage2 from '../pics/banner1.jpg';
import { getPublicDoctorsBySpecialty, getPublicDoctorsByName, getPublicDoctorsByLocation, getAllPublicDoctors } from '../services/DoctorService';

function Banner() {
    const [specialty, setSpecialty] = useState('');
    const [doctor, setDoctor] = useState('');
    const [location, setLocation] = useState('');
    const [doctors, setDoctors] = useState([]);

    const handleSearch = async () => {
        try {
            let results = [];

            if (!specialty && !doctor && !location) {
                // If no parameters are provided, fetch all doctors
                const allDoctors = await getAllPublicDoctors();
                console.log('All Doctors:', allDoctors); // Log all doctors response
                // results = allDoctors; // Uncomment when ready to use results
            } else {
                // If a specialty is provided, search by specialty
                if (specialty) {
                    const specialtyResults = await getPublicDoctorsBySpecialty(specialty);
                    console.log('Specialty Results:', specialtyResults); // Log specialty search response
                    // results = [...results, ...specialtyResults]; // Uncomment when ready to use results
                }

                // If a doctor's name is provided, search by name
                if (doctor) {
                    const [firstName, lastName] = doctor.split(' ');
                    const nameResults = await getPublicDoctorsByName(firstName, lastName);
                    console.log('Name Results:', nameResults); // Log name search response
                    // results = [...results, ...nameResults]; // Uncomment when ready to use results
                }

                // If a location is provided, search by location
                if (location) {
                    const locationResults = await getPublicDoctorsByLocation(location);
                    const doctors = locationResults.data.doctors;
                    console.log('Location Results:', doctors); // Log location search response
                    console.log('Location Results:', locationResults); // Log location search response
                    results = doctors; // Uncomment when ready to use results
                    setDoctors(doctors);
                }
            }

            // Remove duplicates (unique by doctor ID)
            const uniqueResults = Array.from(new Set(results.map(doc => doc.id)))
                .map(id => results.find(doc => doc.id === id));

            console.log('Unique Results:', uniqueResults); // Log final unique results
            // setDoctors(uniqueResults); // Uncomment when ready to set the results

        } catch (error) {
            console.error('Error during search:', error);
        }
    };

    return (
        <div className="relative min-h-screen">
            <img src={myImage2} alt="A doctor holding an elderly person's hand" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <div className="bg-white bg-opacity-85 p-11 rounded-lg shadow-lg text-center">
                    <h1 className="text-4xl font-bold text-blue-700 mb-4">Find the care you need</h1>
                    <div className="flex space-x-4 mb-4">
                        <select
                            className="p-2 border border-gray-300 rounded"
                            value={specialty}
                            onChange={(e) => setSpecialty(e.target.value)}
                        >
                            <option value="">Select Specialty</option>
                            <option value="cardiology">Cardiology</option>
                            <option value="neurology">Neurology</option>
                            <option value="pediatrics">Pediatrics</option>
                            {/* Add more options as needed */}
                        </select>

                        <input
                            type="text"
                            className="p-2 border border-gray-300 rounded"
                            placeholder="Doctor's Name"
                            value={doctor}
                            onChange={(e) => setDoctor(e.target.value)}
                        />

                        <select
                            className="p-2 border border-gray-300 rounded"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        >
                            <option value="">Select Location</option>
                            <option value="elmonfia">Elmonfia</option>
                            <option value="port-said">Port Said</option>
                            <option value="cairo">Cairo</option>
                            <option value="Giza">Giza</option>
                            {/* Add more options as needed */}
                        </select>

                        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                    <p className="text-blue-600">
                        Search by specialty, doctor's name, or location
                    </p>
                </div>
                {doctors.length > 0 ? (
                    <div className="mt-8 bg-white p-8 rounded shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Search Results:</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b">Name</th>
                                        <th className="py-2 px-4 border-b">Specialty</th>
                                        <th className="py-2 px-4 border-b">Location</th>
                                        <th className="py-2 px-4 border-b">Address</th>
                                        <th className="py-2 px-4 border-b">Email</th>
                                        <th className="py-2 px-4 border-b">Phone</th>
                                        <th className="py-2 px-4 border-b">Average Rating</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {doctors.map((doctor, index) => (
                                        <tr key={doctor.id || index} className="border-b">
                                            <td className="py-2 px-4">{doctor.firstName} {doctor.lastName}</td>
                                            <td className="py-2 px-4">{doctor.specialization.join(', ')}</td>
                                            <td className="py-2 px-4">{doctor.city}</td>
                                            <td className="py-2 px-4">{doctor.adresse}</td>
                                            <td className="py-2 px-4">{doctor.email}</td>
                                            <td className="py-2 px-4">{doctor.phone}</td>
                                            <td className="py-2 px-4">{doctor.averageRating}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <p className="text-center mt-8">No doctors found</p>
                )}

            </div>


            <div className="absolute bottom-0 w-full text-center p-4 bg-white bg-opacity-70">
                <h2 className="text-6xl font-bold">YouDawi</h2>
                <p>We ensure the best Doctors. Find The Best Doctor Near You</p>
            </div>

        </div>
    );
}

export default Banner;


// //0
// :
// adresse
// :
// "123 Main St"
// avatar
// :
// "pics/default.png"
// averageRating
// :
// 0
// city
// :
// "Giza"
// email
// :
// "lifelearner.159@gmail.com"
// firstName
// :
// "Jane"
// lastName
// :
// "Dohe"
// logo
// :
// "pics/logo.png"
// password
// :
// "$2a$10$qAice1ScPSBqN.VOLN0yKur0kP3FHa.Lj6yQPIZxxOfItvg3TLEgm"
// phone
// :
// 12345678
// resetPasswordExpires
// :
// "2024-10-22T16:49:45.168Z"
// resetPasswordToken
// :
// "249a49cdd63d0ba4a32b230c28b7fb00b660c8f1d2c26aadca628157e3efc944"
// role
// :
// "doctor"
// schedule
// :
// (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// specialization
// :
// ['Cardiology']
// status
// :
// "approved"
// token
// :
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxpZmVsZWFybmVyLjE1OUBnbWFpbC5jb20iLCJpZCI6IjY3MTZiN2Y5ODVmNTA4YWViNDQ2YWE5MCIsInJvbGUiOiJkb2N0b3IiLCJpYXQiOjE3Mjk1NDIxMzcsImV4cCI6MTcyOTYyODUzN30.mHMU4jd4b-mEWMaowyNtBiIKbn6z_d-pSC5p1A7DKxg"
// totalRating
// :
// 0
// __v
// :
// 0
// _id
// :
// "6716b7f985f508