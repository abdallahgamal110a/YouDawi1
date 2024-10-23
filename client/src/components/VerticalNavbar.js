import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FaHome, FaUserMd, FaCalendarAlt, FaUserInjured, FaProcedures } from 'react-icons/fa'; // Added more icons
import { MdMenuOpen } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";


function VerticalNavbar({ onOpenModal, userRole }) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get current location

    const toggleClasses = isOpen ? 'w-30' : 'w-10'; // Adjust width based on toggle
    const linkTextClass = isOpen ? 'opacity-100' : 'opacity-0'; // Text visibility

    // Define different nav items for different roles

    const doctorNavItems = [
        {
            path: '/dashboard'
            , label: 'Home', icon: <FaHome />
        },
        {
            path: '/doctor-register'
            , label: 'Doctors', icon: <FaUserMd />
        },
        {
            path: '/patients'
            , label: 'Patients', icon: <FaUserInjured />
        },
    ];

    const patientNavItems = [
        { path: '/patient-dashboard', label: 'Home', icon: <FaHome /> },
        { path: '/doctors', label: 'Doctors', icon: <FaUserInjured /> },
        { path: '/patient-appointments', label: 'My Appointments', icon: <FaCalendarAlt /> },
        { path: '/patient-health-history', label: 'Health History', icon: <FaUserCircle /> },
    ];

    const nurseNavItems = [
        { path: '/dashboard', label: 'Home', icon: <FaHome /> },
    ];

    // Determine which nav items to display based on the user role
    let navItems = [];
    if (userRole === 'doctor') {
        navItems = doctorNavItems;
    } else if (userRole === 'patient') {
        navItems = patientNavItems;
    } else if (userRole === 'nurse') {
        navItems = nurseNavItems;
    }

    return (
        <nav className={`vertical-navbar bg-primary-20 h-full p-2 flex flex-col justify-between transition-all duration-300 ${toggleClasses}`}>
            <div>
                {/* Logo */}
                <div className={`border-solid border-black border-0.25 text-blue text-center mb-4 ${isOpen ? 'text-lg' : 'text-sm'}`}>
                    Logo
                </div>

                {/* Toggle Button */}
                <div className="w-full flex items-start">
                    <button className="flex items-center justify-center w-4 h-4 rounded-full bg-white text-3xl" onClick={() => setIsOpen(!isOpen)}>
                        <MdMenuOpen />
                    </button>
                </div>

                {/* Navigation Links */}
                <ul className="space-y-4">
                    {navItems.map(({ path, label, icon }) => {
                        // Check if the current path matches the nav item's path
                        const isActive = location.pathname === path;
                        return (
                            <li key={path} className="group">
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        isActive ? 'text-white bg-emerald-600' : 'text-gray-200 hover:bg-emerald-500'
                                    }
                                >
                                    <div className="flex items-center space-x-4 p-2 rounded-lg transition-colors duration-300">
                                        <span className={`text-3xl transition-colors duration-300 ${isActive ? 'text-yellow-300' : 'text-gray-300'}`}>
                                            {icon}
                                        </span>
                                        <span className={`text-3xl transition-opacity duration-300 ${linkTextClass} ${isActive ? 'text-white' : 'text-gray-200'}`}>
                                            {label}
                                        </span>
                                    </div>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Avatar */}
            <button className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white" onClick={onOpenModal}>
                <FaUserCircle style={{ color: 'white', width: '48px', height: '48px' }} />
            </button>
        </nav>
    );
}

export default VerticalNavbar;
