const express = require('express');
const authController = require('../controllers/auth.js');
const authMid = require('../middleware/auth.js')
const router = express.Router();

router.post('/register',authController.register);
router.post('/login', authController.login);
router.post('/logout',authController.logout);
router.get('/me',authMid.isAuthenticated,authController.currentUser);


module.exports = router;