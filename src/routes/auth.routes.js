const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => res.send('Vista de login'));

router.post('/login', (req, res) => res.send('Esta es la ruta que valida los datos de login'));

router.get('/register', (req, res) => res.send('Vista de register'));

router.post('/register', (req, res) => res.send('Esta es la ruta que crea un nuevo usuario'));

router.get('/logout', (req, res) => res.send('Esta ruta cierra la sesion del usuario'));


module.exports = router