const express = require('express');
const path = require('path')

const router = express.Router();



router.get('/home', (req, res) => res.send ('Vista de Home'));
router.get('/contacto', (req, res) => res.send ('Esta es la vista de contacto'));
router.get('/faqs', (req, res) => res.send ('Esta es la vista de Preguntas Frecuentes'));


module.exports = router;
