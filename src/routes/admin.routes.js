const express = require('express');
const router = express.Router();


router.delete('/item/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Usted quiere eliminar el item: ${id}`)
} );

module.exports = router;