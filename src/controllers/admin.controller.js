const path = require('path');
const { getAll, getOne } = require('../models//product.model')

module.exports = {
    admin: async (req, res) => { 

        const data = await getAll();

        res.render(path.resolve(__dirname, '../views/admin/admin.ejs'), {
            title: "Admin",
            data
    })
    },

    createView: (req, res) => res.render(path.resolve(__dirname, '../views/admin/create.ejs'), {
        title: "Crear Item"
    }),
    createItem:  (req, res) => res.send('Esta es la ruta para agregar un nuevo item'),
    editView: async (req, res) => {  
        const { id } = req.params;

        const [product] = await getOne(id)

        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'), {
            title: "Editar Item",
            product
        });
    },

    
    editItem: (req, res) => res.send('Esta es la vista para impactar la modificacion de un item especifico'),
    deleteItem:  (req, res) => res.send('Esta es la vista para eliminar un item especifico'),

};