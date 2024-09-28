const express = require('express');

const router = express.Router();
const doctorsController = require('../controllers/doctorsController');


router.route('/')
                .get(doctorsController.getAllDoctors)

router.route('/registerDoctor')
                .post(doctorsController.registerDoctor)
                
router.route('/loginDoctor')
                .post(doctorsController.loginDoctor)


module.exports = router;