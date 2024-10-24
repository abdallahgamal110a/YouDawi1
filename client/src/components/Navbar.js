import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../pics/file.png';


const Navbar = () => {
  return (

    <nav className="bg-white-600">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          {/* <i className="fas fa-bars text-xl mr-4"></i> */}
          <img src={myImage} alt="YouDawi" className="h-6 w-20" />
          {/* <img src={myImage} alt="Healthgrades logo" className="h-10 w-10 rounded-full"/> */}
        </div>


        {/* Menu Items */}
        <div className="space-x-4">
          <Link to="/public-home" className="text-sky-600 hover:text-sky-600">
            Home
          </Link>
          <Link to="/doctor-register" className="text-sky-600 hover:text-sky-600">
            Are you a Doctor?
          </Link>
          <a href="/public-home#about" className="text-sky-600 hover:text-sky-600">
            About
          </a>
          <a href="#reviews" className="text-sky-600 hover:text-sky-600">
            Reviews
          </a>
          <Link to="/login" className="text-sky-600 hover:text-sky-600">
            Login
          </Link>
          {/* <Link to="/register" className="text-sky-600 hover:text-sky-600">
            Register
          </Link> */}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
