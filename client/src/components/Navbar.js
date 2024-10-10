import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../pics/logo.jpg';

const Navbar = () => {
  return (
  
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
                            <i className="fas fa-bars text-xl mr-4"></i>
                            <img src={myImage} alt="Healthgrades logo" className="h-10 w-10 rounded-full"/>
        </div>
        

        {/* Menu Items */}
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/doctors-login" className="text-white hover:text-gray-300">
            For Doctors
          </Link>
          <Link to="/login" className="text-white hover:text-gray-300">
            Login
          </Link>
          <Link to="/register" className="text-white hover:text-gray-300">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
