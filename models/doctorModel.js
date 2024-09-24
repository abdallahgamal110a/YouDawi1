const mongoose = require('mongoose');
const { type } = require('os');
const { stringify } = require('querystring');

const DoctorSchema = new mongooseSchema({
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: 'pics/default.png'
    },
    logo: {
        type: String,
        default: 'pics/logo.png'
    },
    phone: {
        type: String,
        required: true
    },
    specialization: {
        type: [String],
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'cancelled'],
        default: 'pending'
    },
    schedule: [
        {
          day: {
            type: String,
            required: true
          },
          timeSlots: {
            type: [String],
            required: true
          }
        }
      ],
    appointment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment"
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    }

});

module.exports = mongoose.model('Doctor', DoctorSchema);