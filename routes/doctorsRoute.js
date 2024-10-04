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
    .get(verifyToken, allowedTo(userRoles.NURSE, userRoles.ADMIN, userRoles.PATIENT), doctorsController.getDoctorsBySpecialty);

router.route('/:id')
    .get(verifyToken, doctorsController.getDoctorById)
    .put(verifyToken, doctorsController.updateDoctor)
    .delete(verifyToken, doctorsController.deleteDoctor)

module.exports = router;