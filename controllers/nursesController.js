const Nurse = require("../models/nurseModel");
const asyncHandler = require("../middlewares/asyncHandler");
const httpStatusText = require('../utils/httpStatusText');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const generateJWT = require("../utils/generateJWT");
const appError = require("../utils/appError")



const register = asyncHandler(async(req, res, next) => {
    const { firstName, email, password } = req.body;
    const nurse = await Nurse.findOne({email: email});
    if (nurse) {
        const error = appError.create('User already exists', 400, httpStatusText.FAIL)
        return next(error);
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newNurse = new Nurse({
        firstName,
        email,
        password: hashedPassword
    })
    try {
        const token = await generateJWT({ email: newNurse.email, id: newNurse._id });
        newNurse.token = token;
        await newNurse.save();
        res.status(201).json({ status: httpStatusText.SUCCESS, data: { nurse: newNurse } });
    } catch (err) {
        const error = appError.create('Failed to register the nurse', 500, httpStatusText.ERROR);
        return next(error);
    }
});


const login= asyncHandler(async(req, res, next) => {
    const {email, password} = req.body;
    if (!email || !password) {
        const error = appError.create('Email and Password are required', 400, httpStatusText.FAIL);
        return next(error);
    }
    const nurse = await Nurse.findOne({email: email});
    if (!nurse) {
        const error = appError.create('Nurse not found', 404, httpStatusText.FAIL);
        return next(error);
    }
    if (nurse.status === 'pending') {
        const error = appError.create('Nurse is not approved yet', 403, httpStatusText.FAIL);
        return next(error);
    } else if (nurse.status === 'cancelled') {
        const error = appError.create('Nurse account has been cancelled', 403, httpStatusText.FAIL);
        return next(error);
    }
    const matchedPassword = await bcrypt.compare(password, nurse.password);
    if (matchedPassword) {
        const token = await generateJWT({ email: nurse.email, id: nurse._id });
        return res.status(200).json({ status: httpStatusText.SUCCESS, data: { token } });
    } else {
        const error = appError.create('Invalid credentials', 401, httpStatusText.FAIL);
        return next(error);
    }
});


const getAllNurses = asyncHandler(async(req, res) => {
    const query = req.query;
    const limit = query.limit || 5;
    const page = query.page || 1;
    const skip = (page - 1) * limit;
    const nurses = await Nurse.find({}, { '__v': false, 'password': false }).limit(limit).skip(skip);
    res.json({ status: httpStatusText.SUCCESS, data: { nurses } });
});

const getNurseById = asyncHandler(async(req, res) => {
    const nurse = await Nurse.findById(req.params.id);
    if (!nurse) {
        return res.status(404).json({ status: httpStatusText.FAIL, message: 'Nurse not found' });
    }
    res.json({ status: httpStatusText.SUCCESS, data: { nurse } });
});

const updateNurse = asyncHandler(async(req, res) => {
    const nurse = await Nurse.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    // new: return updated document / runValidators: updated data meets schema requirements.
    if (!nurse) {
        return res.status(404).json({ status: httpStatusText.FAIL, message: 'Nurse not found' });
    }
    res.json({ status: httpStatusText.SUCCESS, data: { nurse } });
});

const deleteNurse = asyncHandler(async(req, res) => {
    const nurse = await Nurse.findByIdAndDelete(req.params.id);
    if (!nurse) {
        return res.status(404).json({ status: httpStatusText.FAIL, message: 'Nurse not found' });
    }
    res.json({ status: httpStatusText.SUCCESS, data: null });
})


module.exports = {
    register,
    login,
    getAllNurses,
    getNurseById,
    updateNurse,
    deleteNurse
}