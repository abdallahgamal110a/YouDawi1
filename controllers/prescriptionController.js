const Prescription = require('../models/prescriptionModel')
const asyncHandler = require('../middlewares/asyncHandler')
const httpStatusText = require('../utils/httpStatusText')
const appError = require('../utils/appError')

const getAllprescriptions = asyncHandler(async(req, res) => {
    const query = req.query
    const limit = query.limit
    const page = query.page
    const skip = (page - 1) * limit
    const prescriptions = await Prescription.find({}, { '__v': false }).limit(limit).skip(skip);
    res.json({ status: httpStatusText.SUCCESS, data: { prescriptions } });
});

const postprescription = asyncHandler(async(req, res) => {
    const { patientId, doctorId, medications, dateIssued, instructions } = req.body;
    const prescription = new Prescription({
        patientId,
        doctorId,
        medications,
        dateIssued,
        instructions
    });
    const newPrescription = await prescription.save();
    const response = newPrescription.toObject({ versionKey: false });
    res.status(201).json({ status: httpStatusText.SUCCESS, data: { prescription: response } });
});

const getprescriptionById = asyncHandler(async(req, res) => {
    const prescription = await Prescription.findById(req.params.id).select('-__v');
    if (!prescription) {
        return res.status(404).json({ status: httpStatusText.FAIL, message: 'Prescription not found' });
    }
    res.json({ status: httpStatusText.SUCCESS, data: { prescription } });
});

const updatePrescription = asyncHandler(async(req, res) => {
    const prescription = await Prescription.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).select('-__v');
    // new: return updated document / runValidators: updated data meets schema requirements.
    if (!prescription) {
        return res.status(404).json({ status: httpStatusText.FAIL, message: 'prescription not found' });
    }
    res.json({ status: httpStatusText.SUCCESS, data: { prescription } });
});

const deleteprescription = asyncHandler(async(req, res) => {
    const prescription = await Prescription.findByIdAndDelete(req.params.id).select('-__v');
    if (!prescription) {
        return res.status(404).json({ status: httpStatusText.FAIL, message: 'Prescription not found' });
    }
    res.json({ status: httpStatusText.SUCCESS, data: null });
})

module.exports = {
    getAllprescriptions,
    postprescription,
    getprescriptionById,
    updatePrescription,
    deleteprescription
}