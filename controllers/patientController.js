const Patient = require('../models/patientModel')
const asyncHandler = require('../middlewares/asyncHandler')
const httpStatusText = require('../utils/httpStatusText')
const appError = require('../utils/appError')
const bcrypt = require("bcryptjs");
const generateJWT = require("../utils/generateJWT");

const registerPatient = asyncHandler(async(req, res, next) => {
    const { firstName, lastName, email, password, phone, gender, dataOfBirth, age, address, healthHistory } = req.body;
    const patient = await Patient.findOne({ email: email });
    if (patient) {
        const error = appError.create('User already exists', 400, httpStatusText.FAIL);
        return next(error);
    }

    // salt, which is a random string added to the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newPatient = new Patient({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        phone,
        gender,
        dataOfBirth,
        age,
        address,
        healthHistory
    });
    // secure way to encode and transmit user information 
    // between (usually between the client and server)
    try {
        const token = await generateJWT({ email: newPatient.email, id: newPatient._id, role: 'patient' });
        newPatient.token = token;

        await newPatient.save();
        res.status(201).json({ status: httpStatusText.SUCCESS, data: { patient: newPatient } });
    } catch (err) {
        return next(appError.create('Failed to register the patient', 500, httpStatusText.ERROR));
    }
})

module.exports = {
    registerPatient
}