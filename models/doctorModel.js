const mongoose = require('mongoose');
const validator = require('validator');
const userRoles = require('../utils/userRoles')

const DoctorSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    // lastName : {
    //     type: String,
    //     required: true
    // },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'This field must be a valid email']
    },
    password: {
        type: String,
        required: true
    },
    // avatar: {
    //     type: String,
    //     default: 'pics/default.png'
    // },
    // logo: {
    //     type: String,
    //     default: 'pics/logo.png'
    // },
    // phone: {
    //     type: Number,
    //     required: true
    // },
    specialization: {
        type: [String],
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'cancelled'],
        default: 'approved'
    },
    // schedule: [
    //     {
    //       day: {
    //         type: String,
    //         required: true
    //       },
    //       timeSlots: {
    //         type: [String],
    //         required: true
    //       }
    //     }
    //   ],
    // appointment: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Appointment"
    // },
    // patient: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Patient"
    // }
    token: {
        type: String
    },
    role: {
        type: String,
        enum: [userRoles.DOCTOR],
        default: userRoles.DOCTOR
    }

});

module.exports = mongoose.model('Doctor', DoctorSchema);