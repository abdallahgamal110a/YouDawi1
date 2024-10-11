const Patient = require('../models/patientModel')
const asyncHandler = require('../middlewares/asyncHandler')
const httpStatusText = require('../utils/httpStatusText')
const appError = require('../utils/appError')
const bcrypt = require("bcryptjs");
const generateJWT = require("../utils/generateJWT");

const registerPatient = asyncHandler(async (req, res, next) => {
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
});

const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        const error = appError.create('Email and Password are required', 400, httpStatusText.FAIL);
        return next(error);
    }
    const patient = await Patient.findOne({ email: email });
    if (!patient) {
        const error = appError.create('Patient not found', 404, httpStatusText.FAIL);
        return next(error);
    }
    const matchedPassword = await bcrypt.compare(password, patient.password);
    if (matchedPassword) {
        const token = await generateJWT({ email: patient.email, id: patient._id, role: patient.role });
        return res.status(200).json({ status: httpStatusText.SUCCESS, data: { token } });
    } else {
        const error = appError.create('Invalid credentials', 401, httpStatusText.FAIL);
        return next(error);
    }
});

const getProfile = asyncHandler(async (req, res, next) => {
    const patient = await Patient.findById(req.currentUser.id);
    if (!patient) {
        return res.status(404).json({ status: httpStatusText.FAIL, message: "Patient Not Found" })
    }
    res.json({ status: httpStatusText.SUCCESS, data: { patient } });
});

module.exports = {
    registerPatient,
    login,
    getProfile
}
