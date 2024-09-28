const mongoose = require('mongoose');
const { validateAppointmentTime } = require('../utils/appointmentUtils');

const Schema = mongoose.Schema;
const AppointmentSchema = new Schema({
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    doctorId: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    nurseId: {
        type: Schema.Types.ObjectId,
        ref: 'Nurse',
    },
    appointmentDate: {
        type: Date,
        required: true
    },
    appointmentTime: {
        type: String,
        required: true,
        match: /^(09|1[0-9]|2[0-2]):([0-5]\d)$/, // working hours from 09:00 to 22:59
        validate: {
            validator: function(time) {
                return validateAppointmentTime(time, this.doctorId, this.patientId, this.appointmentDate);
            },
            message: 'This time is already booked'
        },
        status: {
            type: String,
            enum: ['Pending', 'Confirmed', 'Cancelled']
        },
        notes: String,
        createdAt: {
            type: String,
            default: Date.now,
            reqired: true
        }
    }
});

const appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = appointment;