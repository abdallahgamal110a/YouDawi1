const mongoose = require('mongoose');

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
            async function(time) {
                const doctorId = this.doctorId;
                const patientId = this.patientId;
                const appointmentDate = this.appointmentDate;

                const docConflict = await mongoose.models.Appointment.findone({
                    doctorId,
                    appointmentDate,
                    appointmentTime: time
                });

                const patConflict = await mongoose.models.Appointment.findOne({
                    patientId,
                    appointmentDate,
                    appointmentTime: time
                })

                return !docConflict && !patConflict
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
            reqired: True
        }
    }
});

const Appointment = mongoose.models('Appointment', AppointmentSchema);

module.exports = Appointment;