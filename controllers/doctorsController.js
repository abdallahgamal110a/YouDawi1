const Doctor = require("../models/doctorModel");
const asyncHandler = require("../middlewares/asyncHandler")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



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
        return res.status(200).json({status: 'success', message: 'Logged in successfully'}) 
    } else {
        return res.status(500).json({status: 'error', message: 'Something went wrong within the login'})
    }
})


const getAllDoctors= () => {}


module.exports = {
    getAllDoctors,
    register,
    login
}