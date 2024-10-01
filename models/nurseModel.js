const mongoose = require('mongoose');
const validator = require('validator');
const userRoles = require('../utils/userRoles')

const NurseSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    // lastName: {
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
    status: {
        type: String,
        enum: ['pending', 'approved', 'cancelled'],
        default: 'approved'
    },
    // avatar: {
    //     type: String,
    //     default: 'pics/default.png'
    // },
    // phone: {
    //     type: Number,
    //     required: true
    // },
    appointment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment"
    },
    token: {
        type: String
    },
    role: {
        type: String,
        enum: [userRoles.NURSE],
        default: userRoles.NURSE
    }

});

module.exports = mongoose.model('Nurse', NurseSchema);