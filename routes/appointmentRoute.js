const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController')

router.route('/')
    .get(appointmentController.getAllAppointments)
    .post(appointmentController.postAppointment)

router.route('/:id')
    .get(appointmentController.getAppointmentById)
    .put(appointmentController.updateAppointment)
    .delete(appointmentController.deleteAppointment);

module.exports = router;