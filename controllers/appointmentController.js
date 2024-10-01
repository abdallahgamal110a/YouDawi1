const Appointment = require('../models/appointmentModel')
const asyncHandler = require('../middlewares/asyncHandler')
const httpStatusText = require('../utils/httpStatusText')

const getAllAppointments = asyncHandler(async(req, res) => {
    const query = req.query;
    const limit = query.limit || 5;
    const page = query.page || 1;
    const skip = (page - 1) * limit;
    const appointments = await Appointment.find({}, { '__v': false }).limit(limit).skip(skip);
    res.json({ status: httpStatusText.SUCCESS, data: { appointments } });
})
const postAppointment = asyncHandler(async(req, res) => {
    const { patientId, doctorId, appointmentDate, appointmentTime } = req.body;
    const appointment = new Appointment({ patientId, doctorId, appointmentDate, appointmentTime });
    const newAppointment = await appointment.save();
    res.status(201).json({ status: httpStatusText.SUCCESS, data: { appointment: newAppointment } });
})

const getAppointmentById = asyncHandler(async(req, res) => {
    const appointment = await Appointment.findById(req.params.id).select('-__v');
    if (!appointment) {
        return res.status(404).json({ status: httpStatusText.FAIL, message: 'Appointment not found' });
    }
    res.json({ status: httpStatusText.SUCCESS, data: { appointment } });
});

const updateAppointment = asyncHandler(async(req, res) => {
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).select('-__v');
    // new: return updated document / runValidators: updated data meets schema requirements.
    if (!appointment) {
        return res.status(404).json({ status: httpStatusText.FAIL, message: 'Appointment not found' });
    }
    res.json({ status: httpStatusText.SUCCESS, data: { appointment } });
});

const deleteAppointment = asyncHandler(async(req, res) => {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) {
        return res.status(404).json({ status: httpStatusText.FAIL, message: 'Appointment not found' });
    }
    res.json({ status: httpStatusText.SUCCESS, data: null });
})

module.exports = {
    getAllAppointments,
    postAppointment,
    getAppointmentById,
    updateAppointment,
    deleteAppointment
}