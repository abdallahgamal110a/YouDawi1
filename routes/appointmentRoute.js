const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController')
const allowedTo = require('../middlewares/allowedTo')
const userRoles = require('../utils/userRoles')

router.route('/')
    .get(allowedTo(userRoles.ADMIN), appointmentController.getAllAppointments)
    .post(appointmentController.postAppointment)

router.route('/:id')
    .get(appointmentController.getAppointmentById)
    .put(appointmentController.updateAppointment)
    .delete(appointmentController.deleteAppointment);

module.exports = router;