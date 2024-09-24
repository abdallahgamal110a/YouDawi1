const mongoose = require('mongoose')
const Schema = mongoose.Schema

const prescreptionSchema = new Schema({
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
    medications: [{
        name: { type: String, reqired: True },
        dosage: { type: String, reqired: True },
        frequiency: { type: String, reqired: True },
        duration: { type: String, reqired: True }
    }],
    dateIssued: {
        type: Date,
        required: True
    },

    instructions: String,
})

const prescreption = mongoose.models('Prescreption', prescreptionSchema)
module.exports = prescreption;