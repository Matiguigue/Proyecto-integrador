const express = require('express');
const path = require('path')

const router = express.Router();

router.get('/', (req, res) => res.send ('Vista de shop'));
router.get('/item/:id', (req, res) => {
    const { id } = req.params;

    res.send(`Usted solicito el item: ${id}`);

});

module.exports = router;