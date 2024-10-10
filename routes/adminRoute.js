const express = require('express');
const adminController = require('../controllers/adminController');
const doctorsController = require('../controllers/doctorsController');
const verifyToken = require('../middlewares/verifyToken');
const allowedTo = require('../middlewares/allowedTo');
const userRoles = require('../utils/userRoles');
const upload = require('../utils/upload');
const router = express.Router();

router.route('/login')
    .post(adminController.login);

router.route('/doctors')
    .get(verifyToken, allowedTo(userRoles.ADMIN), doctorsController.getAllDoctors)
    .post(upload.single('avatar'), allowedTo(userRoles.ADMIN), doctorsController.register);

router.route('/doctors/:id')
    .get(verifyToken, allowedTo(userRoles.ADMIN), doctorsController.getDoctorById)
    .put(verifyToken, allowedTo(userRoles.ADMIN), upload.single('avatar'), doctorsController.updateDoctor)
    .delete(verifyToken, allowedTo(userRoles.ADMIN), doctorsController.deleteDoctor);

module.exports = router;