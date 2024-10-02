const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const allowedTo = require('../middlewares/allowedTo');
const userRoles = require('../utils/userRoles');
const verifyToken = require('../middlewares/verifyToken')

router.route('/')
    .get(verifyToken, appointmentController.getAllAppointments) //allowedTo(userRoles.ADMIN), to be added
    .post(verifyToken, appointmentController.postAppointment)

router.route('/:id')
    .get(verifyToken, appointmentController.getAppointmentById)
    .put(verifyToken, appointmentController.updateAppointment)
    .delete(verifyToken, appointmentController.deleteAppointment);

module.exports = router;