const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const allowedTo = require('../middlewares/allowedTo');
const userRoles = require('../utils/userRoles');
const verifyToken = require('../middlewares/verifyToken')

router.route('/')
    .get(appointmentController.getAllAppointments) //verifyToken, allowedTo(userRoles.ADMIN), to be added
    .post(appointmentController.postAppointment) // 

router.route('/:id')
    .get(verifyToken, appointmentController.getAppointmentById)
    .put(verifyToken, appointmentController.updateAppointment)
    .delete(verifyToken, appointmentController.deleteAppointment);

router.route('/doctor/:id')
    .get(appointmentController.getAppointmentsByDoctorId) // verifyToken, allowedTo(userRoles.DOCTOR, userRoles.ADMIN) to be added

router.route('/patient/:id')
    .get(appointmentController.getAppointmentsByPatientId)


module.exports = router;