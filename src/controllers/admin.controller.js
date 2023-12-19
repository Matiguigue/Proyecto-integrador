const path = require('path');
const { getAll, getOne, create, edit, deleteOne } = require('../models//product.model');
const { log } = require('console');

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
    createItem: async (req, res) => {
        try {
            const product_schema = {
                product_name: req.body.name,
                product_description: req.body.description,
                price: Number(req.body.price),
                stock: Number(req.body.stock),
                discount: Number(req.body.discount),
                sku: req.body.sku,
                dues: Number(req.body.dues),
                img_front: '/products/'+req.files[0].filename,
                img_back: '/products/'+req.files[1].filename,
                category_id: Number(req.body.category),
                licence_id: Number(req.body.licence),  
            }
            
        await create([Object.values(product_schema)]);

        res.redirect('/admin');
        } catch (error) {
            console.error('Error al crear el producto:', error);
            res.status(500).json({ error: true, message: 'Error al crear el producto' });
        }
    },
    editView: async (req, res) => {  
        const { id } = req.params;

        const [product] = await getOne({ product_id: id });

        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'), {
            title: "Editar Item",
            product
        });
    },

    editItem: async (req, res) => {
        const { id } = req.params;
        const haveImages = req.files.length !== 0;

        const product_schema = haveImages
        ?  {
            product_name: req.body.name,
            product_description: req.body.description,
            price: Number(req.body.price),
            stock: Number(req.body.stock),
            discount: Number(req.body.discount),
            sku: req.body.sku,
            dues: Number(req.body.dues),
            img_front: '/products/'+req.files[0].filename,
            img_back: '/products/'+req.files[1].filename,
            category_id: Number(req.body.category),
            licence_id: Number(req.body.licence),  
        }
        :
        {
            product_name: req.body.name,
            product_description: req.body.description,
            price: Number(req.body.price),
            stock: Number(req.body.stock),
            discount: Number(req.body.discount),
            sku: req.body.sku,
            dues: Number(req.body.dues),
            category_id: Number(req.body.category),
            licence_id: Number(req.body.licence),  
        };

        const result = await edit(product_schema, { product_id: id })

        res.redirect('/shop')
    },

    deleteItem: async (req, res) => {
        const { id }= req.params;
        await deleteOne({ product_id: id });

        res.redirect('/admin');
    }
};