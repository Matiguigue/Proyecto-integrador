const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.send('Esta es la vista de admin'));

router.get('/create', (req, res) => res.send('Esta es la vista para crear un nuevo item'));

router.post('/create', (req, res) => res.send('Esta es la ruta para agregar un nuevo item'));

router.get('/edit/:id ', (req, res) => res.send('Esta es la vista para editar un item especifico'));

router.put('/edit/:id ', (req, res) => res.send('Esta es la vista para impactar la modificacion de un item especifico'));

router.delete('/delete/:id ', (req, res) => res.send('Esta es la vista para eliminar un item especifico'));


module.exports = router;