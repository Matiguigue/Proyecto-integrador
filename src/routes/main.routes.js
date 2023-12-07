const express = require('express');
const {home, contact, faqs } = require('../controllers/main.controller');

const router = express.Router();

router.get('/home', home);
router.get('/contacto', contact);
router.get('/faqs', faqs);


module.exports = router;
