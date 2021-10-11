const express = require('express');
const router = express.Router();
const usersCtrl = require('../ctrl/usersCtrl');

router.post('/login', usersCtrl.login);
router.post('/register', usersCtrl.register);

module.exports = router;