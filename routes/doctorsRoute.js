const express = require('express');

const router = express.Router();
const doctorsController = require('../controllers/doctorsController');


router.route('/')
                .get(doctorsController.getAllDoctors)

router.route('/register')
                .post(doctorsController.register)
                
router.route('/login')
                .post(doctorsController.login)


module.exports = router;