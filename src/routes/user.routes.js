const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => {

    res.send('Vista de login');
});

router.post('/login', (req, res) => {

    const { user, password } = req.body;

    res.redirect('/');
});

module.exports = router