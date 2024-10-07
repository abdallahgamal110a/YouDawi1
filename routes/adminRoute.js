const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

router.route('/login')
  .post(adminController.login);


module.exports = router;
