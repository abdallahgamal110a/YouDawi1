const mongoose = require('mongoose');
const { validateAppointmentTime } = require('../utils/appointmentUtils');

const Schema = mongoose.Schema;
const AppointmentSchema = new Schema({
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'Patient',
        reqired: True
    },
    doctorId: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor',
        reqired: True
    },
    nurseId: {
        type: Schema.Types.ObjectId,
        ref: 'Nurse',
        reqired: True
    },
    appointmentDate: {
        type: Date,
        required: True
    },
    appointmentTime: {
        type: String,
        required: True,
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

const appointment = mongoose.models('Appointment', AppointmentSchema);

module.exports = appointment;