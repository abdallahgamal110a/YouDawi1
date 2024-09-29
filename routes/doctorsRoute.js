const express = require('express');

const router = express.Router();
const doctorsController = require('../controllers/doctorsController');
const verifyToken = require('../middlewares/verifyToken');

router.route('/')
                .get(verifyToken, doctorsController.getAllDoctors)

router.route('/register')
                .post(doctorsController.register)
                
router.route('/login')
                .post(doctorsController.login)


module.exports = router;