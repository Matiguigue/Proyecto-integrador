const path = require('path');

module.exports = {
    shop: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/shop.ejs'), {
            title: "Tienda",
        });
    },
    item: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/item.ejs'), {
            title: "Item"
        });
    },
    addItem: (req, res) => res.send('Esta es la ruta para agregar un nuevo item'),
    cart: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/cart.ejs'))
    },
    addToCart:(req, res) => res.send ('Esta es la ruta para agregar un item al carrito')
};


