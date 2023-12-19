const express = require('express');

const router = express.Router();

const path = require('path');

const { login, doLogin, register, doRegister,} = require('../controllers/auth.controller')

router.get('/login', login);

router.get('/register', register);

module.exports = router