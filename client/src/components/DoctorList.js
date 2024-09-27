import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [specialty, setSpecialty] = useState('All');

  // Fetch the list of doctors from a mock API
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('https://api.practo.com/doctors/?page=1');
        setDoctors(response.data);
        setFilteredDoctors(response.data); // Initially set the filtered doctors to all doctors
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  // Handle specialty filter
  const handleSpecialtyChange = (event) => {
    setSpecialty(event.target.value);
    if (event.target.value === 'All') {
      setFilteredDoctors(doctors);
    } else {
      const filtered = doctors.filter(
        (doctor) => doctor.specialty === event.target.value
      );
      setFilteredDoctors(filtered);
    }
  };

  // Get unique specialties for the dropdown
  const getSpecialties = () => {
    const specialties = ['All', ...new Set(doctors.map((doctor) => doctor.specialty))];
    return specialties;
  };

  return (
    <div className="">
      <h1>Doctors</h1>

      {/* Specialty Filter Dropdown */}
      <div className="mb-6">
        <label htmlFor="specialty" className="block mb-2 text-lg font-medium text-gray-600">
          Filter by Specialty
        </label>
        <select
          id="specialty"
          value={specialty}
          onChange={handleSpecialtyChange}
          className="block w-64 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          {getSpecialties().map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>
      </div>

      {/* Doctors List */}
      <ul className="space-y-6">
        {filteredDoctors.length === 0 ? (
          <p className="text-gray-500">No doctors available for this specialty.</p>
        ) : (
          filteredDoctors.map((doctor) => (
            <li key={doctor.id} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
              <p className="text-gray-600">Specialty: {doctor.specialty}</p>
              <p className="text-gray-600">Experience: {doctor.experience} years</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default DoctorList;
