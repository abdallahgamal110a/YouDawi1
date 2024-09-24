const mongoose = require('mongoose');

const NurseSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
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
    phone: {
        type: String,
        required: true
    },
    appointment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment"
    }

});

module.exports = mongoose.model('Nurse', NurseSchema);