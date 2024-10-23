import { Outlet } from 'react-router-dom';
import VerticalNavbar from './VerticalNavbar';
import Modal from './Modal';
import { useState } from 'react';
import ProfileSettings from './ProfileSettings';

function Layout({ role }) {
    const [isModalVisible, setModalVisible] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setModalVisible(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setModalVisible(false);
    };

    // Function to render dashboard based on the user's role
    const renderDashboard = () => {
        switch (role) {
            case 'doctor':
                return <DoctorDashboard />;
            case 'patient':
                return <PatientDashboard />;
            case 'nurse':
                return <NurseDashboard />;
            default:
                return <DefaultDashboard />;
        }
    };

    return (
        <div className="absolute inset-0 layout pl-2 bg-primary-30">
            <div className="absolute inset-2 flex-1 flex border-solid border-0.25 border-primary-10 rounded-md">
                {/* Pass openModal function to VerticalNavbar */}
                <VerticalNavbar onOpenModal={openModal} userRole={role} />

                {/* <div className="w-2 min-w-2"></div> */}

                <div className="flex-1 overflow-auto bg-primary-60">
                    {/* Render the appropriate dashboard based on the user's role */}
                    {renderDashboard()}
                    <Outlet /> {/* Outlet for nested routes */}
                </div>
            </div>

            {/* Profile Component - Triggered within layout */}
            {isModalVisible && (
                <Modal
                    isVisible={isModalVisible}
                    onClose={closeModal}
                    title="Profile settings"
                    content={<ProfileSettings />}
                />
            )}
        </div>
    );
}

// Dummy dashboard components for each role
function DoctorDashboard() {
    // return <div>Doctor Dashboard</div>;
}

function PatientDashboard() {
    return <div>Patient Dashboard</div>;
}

function NurseDashboard() {
    return <div>Nurse Dashboard</div>;
}

function DefaultDashboard() {
    return <div>Default Dashboard</div>;
}

export default Layout;
