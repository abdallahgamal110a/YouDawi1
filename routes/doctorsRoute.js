const express = require('express');
const router = express.Router();

const doctorsController = require('../controllers/doctorsController');
const verifyToken = require('../middlewares/verifyToken');
const allowedTo = require('../middlewares/allowedTo');
const userRoles = require('../utils/userRoles');
const upload = require('../utils/upload');

router.route('/register')
    .post(upload.single('avatar'), doctorsController.register);
                
router.route('/login')
    .post(doctorsController.login);

router.route('/')
    .get(verifyToken, doctorsController.getAllDoctors);

router.route('/specialty')
    .get(verifyToken, doctorsController.getDoctorsBySpecialty);

router.route('/:id')
    .get(verifyToken, doctorsController.getDoctorById)
    .put(verifyToken, allowedTo(userRoles.DOCTOR, userRoles.ADMIN),doctorsController.updateDoctor)
    .delete(verifyToken, allowedTo(userRoles.DOCTOR, userRoles.ADMIN), doctorsController.deleteDoctor);

router.route('/:id/schedule')
    .get(verifyToken, allowedTo(userRoles.DOCTOR, userRoles.NURSE, userRoles.ADMIN), doctorsController.getDoctorSchedule)
    .put(verifyToken, allowedTo(userRoles.DOCTOR, userRoles.NURSE, userRoles.ADMIN), doctorsController.updateDoctorSchedule)

router.route('/:id/status')
    .put(verifyToken, allowedTo(userRoles.ADMIN),doctorsController.updateDoctorStatus);

router.route('/me')
    .get(verifyToken, allowedTo(userRoles.DOCTOR, userRoles.ADMIN), doctorsController.getProfile);

router.route('/dashboard')
    .get(verifyToken, allowedTo(userRoles.DOCTOR, userRoles.ADMIN), doctorsController.getDoctorDashboard);

module.exports = router;