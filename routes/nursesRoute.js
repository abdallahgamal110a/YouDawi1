const express = require('express');

const router = express.Router();
const nursesController = require('../controllers/nursesController');
const verifyToken = require('../middlewares/verifyToken');
const allowedTo = require('../middlewares/allowedTo');
const userRoles = require('../utils/userRoles');
const upload = require('../utils/upload');

router.route('/login')
    .post(nursesController.login)

router.route('/')
    .get(verifyToken, nursesController.getAllNurses)

router.route('/me')
    .get(verifyToken, allowedTo(userRoles.NURSE, userRoles.DOCTOR, userRoles.ADMIN), nursesController.getProfile);

router.route('/dashboard')
    .get(verifyToken, allowedTo(userRoles.NURSE, userRoles.DOCTOR, userRoles.ADMIN), nursesController.getNurseDashboard);

router.route('/:id')
    .get(verifyToken, nursesController.getNurseById)
    .put(verifyToken, nursesController.updateNurse)
    .delete(verifyToken, allowedTo(userRoles.NURSE, userRoles.DOCTOR), nursesController.deleteNurse)

module.exports = router;