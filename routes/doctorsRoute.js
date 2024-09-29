const express = require('express');

const router = express.Router();
const doctorsController = require('../controllers/doctorsController');
const verifyToken = require('../middlewares/verifyToken');

router.route('/register')
    .post(doctorsController.register)
                
router.route('/login')
    .post(doctorsController.login)

router.route('/')
    .get(verifyToken, doctorsController.getAllDoctors)

router.route('/:id')
    .get(doctorsController.getDoctorById)
    .put(doctorsController.updateDoctor)
    .delete(doctorsController.deleteDoctor)

module.exports = router;