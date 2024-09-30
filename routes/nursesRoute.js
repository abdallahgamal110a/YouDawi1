const express = require('express');

const router = express.Router();
const nursesController = require('../controllers/nursesController');
const verifyToken = require('../middlewares/verifyToken');

router.route('/register')
    .post(nursesController.register)
                
router.route('/login')
    .post(nursesController.login)

router.route('/')
    .get(verifyToken, nursesController.getAllNurses)

router.route('/:id')
    .get(verifyToken, nursesController.getNurseById)
    .put(verifyToken, nursesController.updateNurse)
    .delete(verifyToken, nursesController.deleteNurse)

module.exports = router;