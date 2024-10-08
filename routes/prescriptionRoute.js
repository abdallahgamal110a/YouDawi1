const express = require('express');
const router = express.Router();
const prescriptionController = require('../controllers/prescriptionController')
const verifyToken = require('../middlewares/verifyToken')
const allowedTo = require('../middlewares/allowedTo')
const userRoles = require('../utils/userRoles')

router.route('/')
    .get(prescriptionController.getAllprescriptions) // verifyToken, allowedTo(userRoles.DOCTOR)
    .post(prescriptionController.postprescription)

router.route('/:id')
    .get(prescriptionController.getprescriptionById)
    .put(prescriptionController.updatePrescription)
    .delete(prescriptionController.deleteprescription);

module.exports = router;
