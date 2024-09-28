const mongoose = require('mongoose')
const Schema = mongoose.Schema

const prescreptionSchema = new Schema({
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'Patient',
        reqired: true
    },
    doctorId: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor',
        reqired: true
    },
    medications: [{
        name: { type: String, reqired: true },
        dosage: { type: String, reqired: true },
        frequiency: { type: String, reqired: true },
        duration: { type: String, reqired: true }
    }],
    dateIssued: {
        type: Date,
        required: true
    },

    instructions: String,
})

const prescreption = mongoose.model('Prescreption', prescreptionSchema)
module.exports = prescreption;