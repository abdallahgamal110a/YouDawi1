const Prescreption = require('../models/prescreptionModel')
const asyncHandler = require('../middlewares/asyncHandler')
const httpStatusText = require('../utils/httpStatusText')

const getAllprescreptions = asyncHandler(async(req, res) => {
    const query = req.query
    const limit = query.limit
    const page = query.page
    const skip = (page - 1) * limit
    const prescreptions = await Prescreption.find({}, { '__v': false }).limit(limit).skip(skip);
    res.json({ status: httpStatusText.SUCCESS, data: { prescreptions } });
});

const postprescreption = asyncHandler(async(req, res) => {
    const { patientId, doctorId, medications, dateIssued } = req.body;
    const prescreption = new Prescreption(patientId, doctorId, medications, dateIssued)
    const newPrescreption = await prescreption.save();
    const response = newPrescription.toObject({ versionKey: false });
    res.status(201).json({ status: httpStatusText.SUCCESS, data: { prescreption: response } });
});

const getprescreptionById = asyncHandler(async(req, res) => {
    const prescreption = await Prescreption.findById(req.params.id).select('-__v');
    if (!prescreption) {
        return res.status(404).json({ status: httpStatusText.FAIL, message: 'Prescreption not found' });
    }
    res.json({ status: httpStatusText.SUCCESS, data: { prescreption } });
});

const updatePrescreption = asyncHandler(async(req, res) => {
    const prescreption = await Prescreption.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).select('-__v');
    // new: return updated document / runValidators: updated data meets schema requirements.
    if (!prescreption) {
        return res.status(404).json({ status: httpStatusText.FAIL, message: 'prescreption not found' });
    }
    res.json({ status: httpStatusText.SUCCESS, data: { prescreption } });
});

const deleteprescreption = asyncHandler(async(req, res) => {
    const prescreption = await Prescreption.findByIdAndDelete(req.params.id).select('-__v');
    if (!prescreption) {
        return res.status(404).json({ status: httpStatusText.FAIL, message: 'Prescreption not found' });
    }
    res.json({ status: httpStatusText.SUCCESS, data: null });
})

module.exports = {
    getAllprescreptions,
    postprescreption,
    getprescreptionById,
    updatePrescreption,
    deleteprescreption
}