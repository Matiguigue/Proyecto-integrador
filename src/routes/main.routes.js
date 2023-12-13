const express = require('express');
const {home, contact, faqs, about} = require('../controllers/main.controller');

const router = express.Router();

router.get('/home', home);
router.get('/contacto', contact);
router.get('/faqs', faqs);
router.get('/about', about);


module.exports = router;
