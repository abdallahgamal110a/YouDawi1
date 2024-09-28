const express = require('express');
const router = express.Router();
const prescreptionController = require('../controllers/prescreptionController')

router.route('/')
    .get(prescreptionController.getAllprescreptions)
    .post(prescreptionController.postprescreption)

router.route('/:id')
    .get(prescreptionController.getprescreptionById)
    .put(prescreptionController.updatePrescreption)
    .delete(prescreptionController.deleteprescreption);