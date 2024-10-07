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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Redirect root to /components-preview */}
          <Route index element={<Navigate to="/components-preview" />} />

          {/* Define all your routes inside this Route */}
          <Route path="home" element={<Home />} />
          <Route path="doctors" element={<DoctorList />} />
          <Route path="appointments" element={<Appointements />} />
          <Route path="patients" element={<Patients />} />
        </Route>

        {/* Public routes (outside of layout) */}
        <Route path="components-preview" element={<ComponentsPreview />} />
        <Route path="public-home" element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        {/* Catch-all route for unmatched paths */}
        {/* You can uncomment this if you need a default redirect */}
        {/* <Route path="*" element={<Navigate to="/login" />} /> */}
        {/*myproject*/}
      </Routes>
    </Router>
  );
}
export default App;
