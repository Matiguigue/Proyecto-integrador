const express = require('express');
const path = require('path')

const router = express.Router();

router.get('/', (req, res) => res.send ('Vista de shop'));
router.get('/item/:id', (req, res) => {
    const { id } = req.params;

    res.send(`Usted solicito el item: ${id}`);

});


router.post('/item:id/add', (req, res) => res.send('Esta es la ruta para agregar un nuevo item'));

router.get('/cart', (req, res) => res.send ('Vista de cart'));

router.post('/cart', (req, res) => res.send ('Esta es la ruta para agregar un item al carrito'));

module.exports = router;
