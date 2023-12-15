const path = require('path');

module.exports = {
    admin: (req, res) => res.render(path.resolve(__dirname, '../views/admin/admin.ejs'), {
        title: "Admin"
    }),
    createView: (req, res) => res.render(path.resolve(__dirname, '../views/admin/create.ejs'), {
        title: "Crear Item"
    }),
    createItem:  (req, res) => res.send('Esta es la ruta para agregar un nuevo item'),
    editView: (req, res) => res.render(path.resolve(__dirname, '../views/admin/edit.ejs'), {
        title: "Editar Item"
    }),
    editItem: (req, res) => res.send('Esta es la vista para impactar la modificacion de un item especifico'),
    deleteItem:  (req, res) => res.send('Esta es la vista para eliminar un item especifico'),

}