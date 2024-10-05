import { Outlet } from 'react-router-dom';
import VerticalNavbar from './VerticalNavbar';
import Modal from './Modal';
import { useState } from 'react';
import ProfileSettings from './ProfileSettings';


function Layout() {
    // State for controlling modal visibility
    const [isModalVisible, setModalVisible] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setModalVisible(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div className="absolute inset-0 layout p-2">
            <div className="absolute inset-2 flex-1 flex p-2 bg-gray-100 border-2 border-blue rounded-md">
                {/* Pass openModal function to VerticalNavbar */}
                <VerticalNavbar onOpenModal={openModal} />

                <div className="w-2 min-w-2"></div>

                <div className="flex-1 overflow-auto">
                    <Outlet />
                </div>
            </div>

            {/* Profile Component - Triggered within layout */}
            {isModalVisible && <Modal isVisible={isModalVisible} onClose={closeModal} title="Profile settings" content={<ProfileSettings />} />}
        </div>
    );
}

export default Layout;
