const Doctor = require("../models/doctorModel");
const asyncHandler = require("../middlewares/asyncHandler");
const httpStatusText = require('../utils/httpStatusText');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const generateJWT = require("../utils/generateJWT");



const register = asyncHandler(async(req, res, next) => {
    const { firstName, email, password } = req.body;
    const doctor = await Doctor.findOne({email: email});

    if (doctor) {
        return res.status(400).json({status: 'fail', message: 'user already exists'})
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newDoctor = new Doctor({
        firstName,
        email,
        password: hashedPassword
    })

    const token = await generateJWT({email: newDoctor.email, id: newDoctor._id});
    newDoctor.token = token;

    await newDoctor.save();
    res.status(201).json({status: 'success', data: {doctor: newDoctor}})


});


const login= asyncHandler(async(req, res, next) => {
    const {email, password} = req.body;

    if (!email && !password) {
        return res.status(400).json({status: 'fail', message: 'Email and Password are required'})
    }

    const doctor = await Doctor.findOne({email: email});
    if (!doctor) {
        return res.status(400).json({status: 'fail', message: 'Doctor not found'})
    }
    const matchedPassword = await bcrypt.compare(password, doctor.password);

    if (doctor && matchedPassword) {
        const token = await generateJWT({email: doctor.email, id: doctor._id});
        return res.status(200).json({status: 'success', data: {token}}) 
    } else {
        return res.status(500).json({status: 'error', message: 'Something went wrong within the login'})
    }
})


const getAllDoctors = asyncHandler(async(req, res) => {
    const query = req.query;
    const limit = query.limit || 5;
    const page = query.page || 1;
    const skip = (page - 1) * limit;
    const doctors = await Doctor.find({}, { '__v': false, 'password': false }).limit(limit).skip(skip);
    res.json({ status: httpStatusText.SUCCESS, data: { doctors } });
})


module.exports = {
    getAllDoctors,
    register,
    login
}