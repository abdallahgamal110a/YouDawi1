import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import './App.css';
// import Navbar from './components/Navbar';
import DoctorList from './components/DoctorList';
import About from './components/About';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import Register from './components/Register';
import Home from './components/Home';
import Appointements from './components/Appointements';
import Patients from './components/Patients';


function App() {
  const isLoggedIn = false; // Example for checking login status

  return (
    <Router>
      <Routes>
        {/* Render the Layout only if user is logged in */}
        {isLoggedIn ? (
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/doctors" element={<DoctorList />} />
            <Route path="/appointments" element={<Appointements />} />
            <Route path="/patients" element={<Patients />} />
          </Route>
        ) : (
          // Different component for non-logged-in users (landing page)
          <Route>
            {/* <Navbar /> */}
            <Route path="/home" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
}

export default App;
