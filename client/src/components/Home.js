import React from 'react';
import SearchBar from './Searchbar';
import AppointmentCalendar from './AppointmentCalendar';


// Example doctor data (replace with API data)
const topRatedDoctors = [
  { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologist', rating: 4.9, imageUrl: '/doctor1.jpg' },
  { id: 2, name: 'Dr. Jane Smith', specialty: 'Dermatologist', rating: 4.8, imageUrl: '/doctor2.jpg' },
  { id: 3, name: 'Dr. Alice Johnson', specialty: 'Pediatrician', rating: 4.7, imageUrl: '/doctor3.jpg' },
];

function Home() {
  const handleSearch = (query) => {
    console.log('Searching for:', query);
    // Fetch or filter your data based on the `query`
    // setSearchResults(filteredData);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Search bar */}
      <div className="w-full mb-8">
        <SearchBar onSearch={handleSearch} placeholder="Search by name, specialty..." />
      </div>

      <AppointmentCalendar />
      {/* Top-rated doctors section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Top-Rated Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topRatedDoctors.map((doctor) => (
            <div key={doctor.id} className="border rounded-lg p-4 shadow-lg">
              <img src={doctor.imageUrl} alt={doctor.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-lg font-bold">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.specialty}</p>
              <p className="text-yellow-500 font-semibold">Rating: {doctor.rating} ★</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">See More Doctors</button>
        </div>
      </div>

      {/* Book an appointment section */}
      <div className="flex flex-col md:flex-row items-center bg-gray-100 p-8 rounded-lg shadow-lg">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="/book-appointment.jpg" alt="Book an Appointment" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-semibold mb-4">Book an Appointment Today</h2>
          <p className="text-gray-700 mb-6">
            Find the best doctors and book an appointment online. Choose from a wide range of specialties to meet your health needs.
          </p>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg">Book an Appointment</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
