const mongoose = require('mongoose');

async function validateAppointmentTime(time, doctorId, patientId, appointmentDate) {
    const docConflict = await mongoose.models.Appointment.findOne({
        doctorId,
        appointmentDate,
        appointmentTime: time
    });

    const patConflict = await mongoose.models.Appointment.findOne({
        patientId,
        appointmentDate,
        appointmentTime: time
    });

    return !docConflict && !patConflict;
}

module.exports = {
    validateAppointmentTime
};