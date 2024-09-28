const express = require('express');

const router = express.Router();
const doctorsController = require('../controllers/doctorsController');


router.route('/')
                .get(doctorsController.getAllDoctors)

router.route('/register')
                .get(doctorsController.registerDoctor)
                
router.route('/login')
                .get(doctorsController.loginDoctor)


module.exports = router;