import React, { useState, useEffect } from 'react';
import prescriptionService from '../services/PrescriptionService';
// import { getDoctorById } from '../services/DoctorService'; // Assuming you have a doctor service
// import patientService from '../services/PatientService';
import { useNavigate, useParams } from 'react-router-dom';
import logoImage from '../pics/file.png';
import "./WritePrescription.css";

const WritePrescription = () => {
    // const [doctor, setDoctor] = useState(null);
  const [doctor, setDoctor] = useState({
    logo: '',
    firstName: 'John',
    lastName: 'Doe',
    specialty: 'Cardiology',
    address: '123 Medical St.',
    city: 'New York',
    phone: '(555) 123-4567',
    email: 'johndoe@example.com',
  });
  const [patient, setPatient] = useState({ name: 'Jane Smith' });  //Jane Smith
  const [medications, setMedications] = useState([{ name: '', dosage: '', frequency: '', duration: '' }]);
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { doctorId, patientId } = useParams();

  //dynamic part

//   useEffect(() => {
//     const fetchDoctorData = async () => {
//       try {
//         const doctorResponse = await getDoctorById(doctorId); // Fetch doctor info
//         setDoctor(doctorResponse.data);
//       } catch (error) {
//         setError('Failed to fetch doctor information');
//         console.error('Error fetching doctor:', error);
//       }
//     };

//     const fetchPatientData = async () => {
//       try {
//         const patientResponse = await patientService.getPatientById(patientId); // Fetch patient info
//         setPatient(patientResponse.data);
//       } catch (error) {
//         setError('Failed to fetch patient information');
//         console.error('Error fetching patient:', error);
//       }
//     };

//     fetchDoctorData();
//     fetchPatientData();
//   }, [doctorId, patientId]);



  const handleSubmit = async (e) => {
    e.preventDefault();

    const prescriptionData = {
      patientId,
      doctorId,
      medications,
      instructions,
      dateIssued: new Date(),
    };

    try {
      await prescriptionService.postPrescription(prescriptionData);
      alert('Prescription submitted successfully!');
      window.print(); // Trigger the print dialog after submission
      navigate('/dashboard');
    } catch (error) {
      setError('Failed to submit prescription');
      console.error('Error submitting prescription:', error);
    }
  };

  const handleMedicationChange = (index, field, value) => {
    const updatedMedications = medications.map((med, i) =>
      i === index ? { ...med, [field]: value } : med
    );
    setMedications(updatedMedications);
  };

  const addMedication = () => {
    setMedications([...medications, { name: '', dosage: '', frequency: '', duration: '' }]);
  };

  const removeMedication = (index) => {
    setMedications(medications.filter((_, i) => i !== index));
  };

  return (
    <div className="write-prescription-wrapper">
      <div className="prescription-paper">
        {error && <div className="error-message">{error}</div>}
        
        <div className="header-section">
          <div className="doctor-logo">
            <img src={doctor.logo || logoImage} alt="Doctor Logo" />
          </div>
          <div className="doctor-info">
            <h2>{`${doctor.firstName} ${doctor.lastName}`}</h2>
            <p>{doctor.specialty}</p>
          </div>
        </div>

        <div className="date-patient-section">
          <div className="date">
            <label>Date: </label>
            <input type="text" value={new Date().toLocaleDateString()} disabled />
          </div>
          <div className="spacer"></div> {/* Spacer to add space between date and patient name */}
          <div className="patient">
            <label>Patient: </label>
            <input type="text" value={patient.name} disabled />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="medications-section">
            <label>Medications:</label>
            {medications.map((medication, index) => (
              <div key={index} className="medication">
                <input
                  type="text"
                  value={medication.name}
                  onChange={(e) => handleMedicationChange(index, 'name', e.target.value)}
                  placeholder="Medication Name"
                />
                <input
                  type="text"
                  value={medication.dosage}
                  onChange={(e) => handleMedicationChange(index, 'dosage', e.target.value)}
                  placeholder="Dosage"
                />
                <input
                  type="text"
                  value={medication.frequency}
                  onChange={(e) => handleMedicationChange(index, 'frequency', e.target.value)}
                  placeholder="Frequency"
                />
                <input
                  type="text"
                  value={medication.duration}
                  onChange={(e) => handleMedicationChange(index, 'duration', e.target.value)}
                  placeholder="Duration"
                />
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeMedication(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="add-medication-btn"
              onClick={addMedication}
            >
              Add Medication
            </button>
          </div>

          <div className="instructions-section">
            <label>Instructions:</label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Additional instructions"
            />
          </div>

          {/* Signature Line Section */}
          <div className="signature-section">
            <label>Signature:</label>
            <div className="signature-line"></div> {/* This will be a line for the signature */}
          </div>

          <button type="submit" className="submit-btn">Submit Prescription</button>
        </form>

        <div className="doctor-contact-info">
          <p>{doctor.address}, {doctor.city}</p>
          <p>Phone: {doctor.phone}</p>
          <p>Email: {doctor.email}</p>
        </div>
      </div>
    </div>
  );
};

export default WritePrescription;
