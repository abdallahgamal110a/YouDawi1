import { NavLink } from 'react-router-dom';

function VerticalNavbar() {
    return (
        <nav className="vertical-navbar bg-emerald-400 w-20 h-full p-2 flex flex-col justify-between">
            <div>
                <div className='border-solid border-black border-0.25 text-blue'>logo</div>

                <ul className='mt-2'>
                    <li>
                        <NavLink to="/home" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/doctors" className={({ isActive }) => isActive ? 'active' : ''}>Doctors</NavLink>
                    </li>
                    <li>
                        <NavLink to="/appointments" className={({ isActive }) => isActive ? 'active' : ''}>Appointments</NavLink>
                    </li>
                    <li>
                        <NavLink to="/patients" className={({ isActive }) => isActive ? 'active' : ''}>Patients</NavLink>
                    </li>
                </ul>
            </div>

            <div className="w-8 h-8 rounded-full bg-emerald-500 flex-center">
                Avatar
            </div>
        </nav>
    );
}

export default VerticalNavbar;
