const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadFiles')

const { admin, createView, createItem, editView, editItem, deleteItem } = require('../controllers/admin.controller');
 
const isLogged = (req, res, next) => {
    if(req.session.isLogged){
        return next();
    }

    res.status(401).send('Debes loguearte para ingresar a esta vista');
}

router.get('/', isLogged, admin);

router.get('/create', isLogged, createView);

router.post('/create', upload.array('images', 2), createItem);

router.get('/edit/:id', isLogged, editView);

router.put('/edit/:id', upload.array('images', 2), editItem);

router.delete('/delete/:id',deleteItem);


module.exports = router;