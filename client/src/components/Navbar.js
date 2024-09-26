import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          MyApp
        </Link>

        {/* Menu Items */}
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
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
