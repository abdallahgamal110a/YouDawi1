// components/AppointmentForm.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from './TimePicker';

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    fetchAvailableSlots(date.toISOString().split('T')[0]);
  };

  const fetchAvailableSlots = async (day) => {
    // Simulating API call to get available slots
    const response = await fetch(`/api/appointments?day=${day}`);
    const data = await response.json();
    setAvailableSlots(data);
  };

  return (
    <form className="max-w-md mx-auto mt-8 bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-4">Book Your Appointment</h2>

      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
          Select Day:
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
          Available Hours:
        </label>
        <TimePicker availableSlots={availableSlots} />
      </div>

      <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        Book Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
