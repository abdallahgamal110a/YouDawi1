const Doctor = require("../models/doctorModel");
const asyncHandler = require("../middlewares/asyncHandler");
const httpStatusText = require('../utils/httpStatusText');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const generateJWT = require("../utils/generateJWT");
const appError = require("../utils/appError")



const register = asyncHandler(async(req, res, next) => {
    const { firstName, email, password } = req.body;
    const doctor = await Doctor.findOne({email: email});
    if (doctor) {
        const error = appError.create('User already exists', 400, httpStatusText.FAIL)
        return next(error);
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newDoctor = new Doctor({
        firstName,
        email,
        password: hashedPassword
    })
    try {
        const token = await generateJWT({ email: newDoctor.email, id: newDoctor._id });
        newDoctor.token = token;
        await newDoctor.save();
        res.status(201).json({ status: httpStatusText.SUCCESS, data: { doctor: newDoctor } });
    } catch (err) {
        const error = appError.create('Failed to register the doctor', 500, httpStatusText.ERROR);
        return next(error);
    }
});


const login= asyncHandler(async(req, res, next) => {
    const {email, password} = req.body;
    if (!email || !password) {
        const error = appError.create('Email and Password are required', 400, httpStatusText.FAIL);
        return next(error);
    }
    const doctor = await Doctor.findOne({email: email});
    if (!doctor) {
        const error = appError.create('Doctor not found', 404, httpStatusText.FAIL);
        return next(error);
    }
    if (doctor.status === 'pending') {
        const error = appError.create('Doctor is not approved yet', 403, httpStatusText.FAIL);
        return next(error);
    } else if (doctor.status === 'cancelled') {
        const error = appError.create('Doctor account has been cancelled', 403, httpStatusText.FAIL);
        return next(error);
    }
    const matchedPassword = await bcrypt.compare(password, doctor.password);
    if (matchedPassword) {
        const token = await generateJWT({ email: doctor.email, id: doctor._id });
        return res.status(200).json({ status: httpStatusText.SUCCESS, data: { token } });
    } else {
        const error = appError.create('Invalid credentials', 401, httpStatusText.FAIL);
        return next(error);
    }
});


const getAllDoctors = asyncHandler(async(req, res) => {
    const query = req.query;
    const limit = query.limit || 5;
    const page = query.page || 1;
    const skip = (page - 1) * limit;
    const doctors = await Doctor.find({}, { '__v': false, 'password': false }).limit(limit).skip(skip);
    res.json({ status: httpStatusText.SUCCESS, data: { doctors } });
});

const getDoctorById = asyncHandler(async(req, res) => {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
        return res.status(404).json({ status: httpStatusText.FAIL, message: 'Doctor not found' });
    }
    res.json({ status: httpStatusText.SUCCESS, data: { doctor } });
});

const updateDoctor = asyncHandler(async(req, res) => {
    const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    // new: return updated document / runValidators: updated data meets schema requirements.
    if (!doctor) {
        return res.status(404).json({ status: httpStatusText.FAIL, message: 'Doctor not found' });
    }
    res.json({ status: httpStatusText.SUCCESS, data: { doctor } });
});

const deleteDoctor = asyncHandler(async(req, res) => {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) {
        return res.status(404).json({ status: httpStatusText.FAIL, message: 'Doctor not found' });
    }
    res.json({ status: httpStatusText.SUCCESS, data: null });
})


module.exports = {
    register,
    login,
    getAllDoctors,
    getDoctorById,
    updateDoctor,
    deleteDoctor
}