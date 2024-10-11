import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../pics/logo2.jpg';

const Navbar = () => {
  return (
  
    <nav className="bg-white-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
                            {/* <i className="fas fa-bars text-xl mr-4"></i> */}
           <img src={myImage} alt="Healthcare" width="40" height="50" />           
          {/* <img src={myImage} alt="Healthgrades logo" className="h-10 w-10 rounded-full"/> */}
        </div>       
        

        {/* Menu Items */}
        <div className="space-x-4">
          <Link to="/" className="text-sky-600 hover:text-sky-600">
            Home
          </Link>
          <Link to="/doctors-login" className="text-sky-600 hover:text-sky-600">
            Are you Doctors?
          </Link>
          <Link to="/login" className="text-sky-600 hover:text-sky-600">
            About Us
          </Link>
          <Link to="/login" className="text-sky-600 hover:text-sky-600">
            Login
          </Link>
          <Link to="/register" className="text-sky-600 hover:text-sky-600">
            Register
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
