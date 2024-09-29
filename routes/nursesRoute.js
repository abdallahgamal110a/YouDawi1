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
    .get(nursesController.getNurseById)
    .put(nursesController.updateNurse)
    .delete(nursesController.deleteNurse)

module.exports = router;