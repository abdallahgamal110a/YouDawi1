import React from 'react';
import AppointmentsTable from './AppointmentsTable';
import PatientAppointments from './PatientAppointmentsTable';
function Appointements() {
    return (
        <div >
            <h1>Appointements</h1>
            {/* <AppointmentsTable /> */}
            <PatientAppointments/> 
        </div>
    );
}

export default Appointements;