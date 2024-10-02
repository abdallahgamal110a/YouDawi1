import { Outlet } from 'react-router-dom';
import VerticalNavbar from './VerticalNavbar';

function Layout() {
    return (
        <div className="absolute inset-0 layout p-2">
            <div className="absolute inset-2 flex-1 flex p-2 bg-gray-100 border-2 border-blue rounded-md">
                <VerticalNavbar />
                <div className="w-2 min-w-2"></div>
                <div className="flex-1 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;
