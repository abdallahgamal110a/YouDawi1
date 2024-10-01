const express = require('express');

const router = express.Router();
const nursesController = require('../controllers/nursesController');
const verifyToken = require('../middlewares/verifyToken');
const allowedTo = require('../middlewares/allowedTo');
const userRoles = require('../utils/userRoles')

router.route('/register')
    .post(nursesController.register)
                
router.route('/login')
    .post(nursesController.login)

router.route('/')
    .get(verifyToken, nursesController.getAllNurses)

router.route('/:id')
    .get(verifyToken, nursesController.getNurseById)
    .put(verifyToken, nursesController.updateNurse)
    .delete(verifyToken, allowedTo(userRoles.NURSE, userRoles.DOCTOR), nursesController.deleteNurse)

module.exports = router;