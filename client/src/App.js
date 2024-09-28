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


function App() {
  // const isLoggedIn = false; // Example for checking login status

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/components" />} /> {/* Redirect root to /home */}
          <Route path="home" element={<Home />} />
          <Route path="doctors" element={<DoctorList />} />
          <Route path="appointments" element={<Appointements />} />
          <Route path="patients" element={<Patients />} />

        </Route>
        <Route>
          <Route path="/" element={<Navigate to="/components" />} /> {/* Redirect root to /home */}
          <Route path="home" element={<LandingPage />} />
          <Route path="about" element={<About />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="components" element={<ComponentsPreview />} />

        </Route>
        {/* Catch-all route for unmatched paths */}
        {/* <Route path="*" element={<Navigate to={isLoggedIn ? "/home" : "/login"} />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
