const express = require('express');

const router = express.Router();
const {home, contact, faqs, about} = require('../controllers/main.controller');

router.get('/', home);
router.get('/home', home);
router.get('/contacto', contact);
router.get('/faqs', faqs);
router.get('/about', about);


module.exports = router;
