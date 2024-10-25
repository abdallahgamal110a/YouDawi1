import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import './App.css';
import DoctorList from './components/DoctorList';
import About from './components/About';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import Register from './components/Register';
import Home from './components/Home';
import Appointements from './components/Appointements';
import Patients from './components/Patients';
import ComponentsPreview from './components/ComponentsPreview';
import DoctorLogin from './components/DoctorLogin';
import DoctorProfile from './components/DoctorProfile';
import DoctorRegister from './components/DoctorRegister';
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute
import PatientDashboard from './components/PatientDashboard';
import NurseLogin from './components/NurseLogin';
import PatientProfile from './components/PatientProfile';
import PatientAppointments from './components/PatientAppointments';
import AdminLogin from './components/AdminLogin'
import BookAppointment from './components/BookAppointment';
import ConfirmNewPassword from './components/ConfirmNewPassword';
import Appointments from './components/Appointements';

import DoctorNurseDashboard from './components/DoctorNurseDashboard';
import { RoleProvider } from './components/RoleContext';
import { jwtDecode } from 'jwt-decode';
import ForgetPassword from './components/ForgetPassword';
import NurseRegisterForm from './components/registerNurse';
import WritePrescription from './components/WritePrescription';
import PatientDetailPage from './components/PatientDetailPage';


function App() {
<<<<<<< HEAD
    const token = localStorage.getItem('token');
    let decodedToken = null;
    let role = null;
    let userId = "";

    if (token) {
        decodedToken = jwtDecode(token); // Decode the token
        role = decodedToken.role; // Extract the role from the token
        userId = decodedToken.id;
        console.log(role);
    }

    return ( <
            RoleProvider role = { role } > { /* Provide role globally */ } <
            Router >
            <
            Routes >
            <
            Route path = "/"
            element = { < Layout role = { role }
                />}> { /* Redirect root to dashboard */ } <
                Route index element = { < Navigate to = "/dashboard" / > }
                />

                { /* Shared Doctor and Nurse Dashboard */ } <
                Route
                path = "dashboard"
                element = { <
                    ProtectedRoute allowedRoles = {
                        ['doctor', 'nurse'] } >
                    <
                    DoctorNurseDashboard role = { role }
                    />  {/ * Pass role as a prop * /} <
                    /ProtectedRoute>
                }
                /> { /* Shared */ } <
                Route
                path = "appointments"
                element = { <
                    ProtectedRoute allowedRoles = {
                        ['doctor', 'nurse'] } >
                    <
                    Appointments / > { /* Pass role as a prop */ } <
                    /ProtectedRoute>
                }
                /> <
                Route
                path = "patients"
                element = { <
                    ProtectedRoute allowedRoles = {
                        ['doctor', 'nurse'] } >
                    <
                    Patients / >
                    <
                    /ProtectedRoute>
                }
                />

                { /* Patient Dashboard */ } <
                Route
                path = "patient-dashboard"
                element = { <
                    ProtectedRoute allowedRoles = {
                        ['patient'] } >
                    <
                    PatientDashboard / >
                    <
                    /ProtectedRoute>
                }
                />

                { /* Doctors */ } <
                Route
                path = "doctors"
                element = { <
                    ProtectedRoute allowedRoles = {
                        ['patient'] } >
                    <
                    DoctorList / >
                    <
                    /ProtectedRoute>
                }
                />

                { /* Patient Appointments */ } <
                Route
                path = "patient-appointments"
                element = { <
                    ProtectedRoute allowedRoles = {
                        ['patient'] } >
                    <
                    PatientAppointments patientId = { userId }
                    /> <
                    /ProtectedRoute>
                }

                />

                { /* Health history */ } <
                Route
                path = "health-history"
                element = {
                    //      <ProtectedRoute allowedRoles={['patient', 'doctor']}>
                    <
                    PatientDetailPage / >
                    //     </ProtectedRoute>
                }

                />

                { /* Prescription */ } <
                Route
                path = "write-prescription/:doctorId/:patientId"
                element = {
                    //      <ProtectedRoute allowedRoles={['doctor']}>
                    <
                    WritePrescription / >
                    //     </ProtectedRoute>
                }

                />

                <
                /Route>

                { /* Public routes */ } <
                Route path = "/login"
                element = { < Login / > }
                /> <
                Route path = "/register"
                element = { < Register / > }
                /> <
                Route path = "/doctor-login"
                element = { < DoctorLogin / > }
                /> <
                Route path = "/doctor-register"
                element = { < DoctorRegister / > }
                /> <
                Route path = "/nurse-login"
                element = { < NurseLogin / > }
                /> <
                Route path = "/public-home"
                element = { < LandingPage / > }
                /> <
                Route path = "/components-preview"
                element = { < ComponentsPreview / > }
                /> <
                Route path = "doctor-profile"
                element = { < DoctorProfile / > }
                /> <
                Route path = "patient-profile"
                element = { < PatientProfile / > }
                /> <
                Route path = "forgetpassword"
                element = { < ForgetPassword / > }
                />

                <
                Route path = "confirmnewpassword"
                element = { < ConfirmNewPassword / > }
                />

                <
                Route path = "bookappointment"
                element = { < BookAppointment / > }
                />


                { /* Public routes */ } <
                Route path = "/login"
                element = { < Login / > }
                /> <
                Route path = "/register"
                element = { < Register / > }
                /> <
                Route path = "/doctor-login"
                element = { < DoctorLogin / > }
                /> <
                Route path = "/doctor-register"
                element = { < DoctorRegister / > }
                /> <
                Route path = "/nurse-login"
                element = { < NurseLogin / > }
                /> <
                Route path = "/public-home"
                element = { < LandingPage / > }
                /> <
                Route path = "/components-preview"
                element = { < ComponentsPreview / > }
                /> <
                Route path = "/doctor-profile"
                element = { < DoctorProfile / > }
                /> <
                Route path = "/patient-profile"
                element = { < PatientProfile / > }
                /> <
                Route path = "/forget-password"
                element = { < ForgetPassword role = { role }
                    />} / >
                    <
                    Route path = "/confirm-new-password"
                    element = { < ConfirmNewPassword / > }
                    /> <
                    Route path = "/book-appointment"
                    element = { < BookAppointment / > }
                    /> <
                    Route path = "/nurse-register"
                    element = { < NurseRegisterForm / > }
                    /> <
                    Route path = "/admin-login"
                    element = { < AdminLogin / > }
                    /> <
                    Route path = "/priscreption"
                    element = { < WritePrescription / > }
                    />

                    { /* Catch-all route */ } <
                    Route path = "*"
                    element = { < Navigate to = "/login" / > }
                    /> <
                    /Routes> <
                    /Router> <
                    /RoleProvider >
                );
            }

            export default App;
=======
  const token = localStorage.getItem('token');
  let decodedToken = null;
  let role = null;
  let userId = "";

  if (token) {
    decodedToken = jwtDecode(token); // Decode the token
    role = decodedToken.role; // Extract the role from the token
    userId = decodedToken.id;
    console.log(role);
  }

  return (
    <RoleProvider role={role}>  {/* Provide role globally */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout role={role} />}>
            {/* Redirect root to dashboard */}
            <Route index element={<Navigate to="/dashboard" />} />

            {/* Shared Doctor and Nurse Dashboard */}
            <Route
              path="dashboard"
              element={
                <ProtectedRoute allowedRoles={['doctor', 'nurse']}>
                  <DoctorNurseDashboard role={role} />  {/* Pass role as a prop */}
                </ProtectedRoute>
              }
            />
            {/* Shared */}
            <Route
              path="appointments"
              element={
                <ProtectedRoute allowedRoles={['doctor', 'nurse']}>
                  <Appointments /> {/* Pass role as a prop */}
                </ProtectedRoute>
              }
            />
            <Route
              path="patients"
              element={
                <ProtectedRoute allowedRoles={['doctor', 'nurse']}>
                  <Patients />
                </ProtectedRoute>
              }
            />

            {/* Patient Dashboard */}
            <Route
              path="patient-dashboard"
              element={
                <ProtectedRoute allowedRoles={['patient']}>
                  <PatientDashboard />
                </ProtectedRoute>
              }
            />

            {/* Doctors */}
            <Route
              path="doctors"
              element={
                <ProtectedRoute allowedRoles={['patient']}>
                  <DoctorList />
                </ProtectedRoute>
              }
            />

            {/* Patient Appointments */}
            <Route
              path="patient-appointments"
              element={
                <ProtectedRoute allowedRoles={['patient']}>
                  <PatientAppointments patientId={userId} />
                </ProtectedRoute>
              }

            />

            {/* Health history */}
            <Route
              path="health-history"
              element={
                //      <ProtectedRoute allowedRoles={['patient', 'doctor']}>
                <PatientDetailPage />
                //     </ProtectedRoute>
              }

            />

            {/* Prescription */}
            <Route
              path="write-prescription/:doctorId/:patientId"
              element={
                //      <ProtectedRoute allowedRoles={['doctor']}>
                <WritePrescription />
                //     </ProtectedRoute>
              }

            />

          </Route>

          { /* Public routes */}
          <Route path="/login"
            element={< Login />}
          />
          <Route path="/register"
            element={< Register />}
          />
          <Route path="/doctor-login"
            element={< DoctorLogin />}
          />
          <Route path="/doctor-register"
            element={< DoctorRegister />}
          />
          <Route path="/nurse-login"
            element={< NurseLogin />}
          />
          <Route path="/public-home"
            element={< LandingPage />}
          />
          <Route path="/components-preview"
            element={< ComponentsPreview />}
          />
          <Route path="doctor-profile"
            element={< DoctorProfile />}
          />
          <Route path="patient-profile"
            element={< PatientProfile />}
          />
          <Route path="forgetpassword"
            element={< ForgetPassword />}
          />

          <Route path="confirmnewpassword"
            element={< ConfirmNewPassword />}
          />

          <Route path="bookappointment"
            element={< BookAppointment />}
          />


          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctor-login" element={<DoctorLogin />} />
          <Route path="/doctor-register" element={<DoctorRegister />} />
          <Route path="/nurse-login" element={<NurseLogin />} />
          <Route path="/public-home" element={<LandingPage />} />
          <Route path="/components-preview" element={<ComponentsPreview />} />
          <Route path="/doctor-profile" element={<DoctorProfile />} />
          <Route path="/patient-profile" element={<PatientProfile />} />
          <Route path="/forget-password" element={<ForgetPassword role={role} />} />
          <Route path="/confirm-new-password" element={<ConfirmNewPassword />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/nurse-register" element={<NurseRegisterForm />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/patient-data" element={<PatientDetailPage />} />

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </RoleProvider >
  );
}

export default App;
>>>>>>> 95fbd04a612733c3a1f9f151eaf0a70d7aca4243
