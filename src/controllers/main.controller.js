module.exports = {
    home: (req, res ) => res.render('home', {
        title: "Home | Funkoshop"
    }),
    contact: (req, res) => res.send('Esta es la vista de contacto'),
    faqs: (req, res) => res.send('Esta es la vista de Preguntas Frecuentes')
};
