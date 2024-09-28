const Doctor = require("../models/doctorModel");
const asyncHandler = require("../middlewares/asyncHandler")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



const registerDoctor = asyncHandler(async(req, res, next) => {
    console.log(req.body);
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

await newDoctor.save();
res.status(201).json({status: 'success', data: {doctor: newDoctor}})


});


const loginDoctor= () => {}


const getAllDoctors= () => {}


module.exports = {
    getAllDoctors,
    registerDoctor,
    loginDoctor
}