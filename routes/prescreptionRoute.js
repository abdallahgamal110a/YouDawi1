const express = require('express');
const router = express.Router();
const prescreptionController = require('../controllers/prescreptionController')
const verifyToken = require('../middlewares/verifyToken')
const allowedTo = require('../middlewares/allowedTo')
const userRoles = require('../utils/userRoles')

router.route('/')
    .get(verifyToken, allowedTo(userRoles.DOCTOR), prescreptionController.getAllprescreptions)
    .post(verifyToken, allowedTo(userRoles.DOCTOR), prescreptionController.postprescreption)

router.route('/:id')
    .get(verifyToken, allowedTo(userRoles.DOCTOR, userRoles.PATIENT), prescreptionController.getprescreptionById)
    .put(verifyToken, allowedTo(userRoles.DOCTOR), prescreptionController.updatePrescreption)
    .delete(verifyToken, allowedTo(userRoles.DOCTOR), prescreptionController.deleteprescreption);

module.exports = router;
