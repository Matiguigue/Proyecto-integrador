const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const {initSession } = require('./src/middlewares/session');
 
// Routes Imports

const mainRoutes = require('./src/routes/main.routes')
const shopRoutes = require('./src/routes/shop.routes')
const adminRoutes = require('./src/routes/admin.routes')
const authRoutes = require('./src/routes/auth.routes')

const PORT = 3003;

// Template Engines

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

// Crear sesion de usuario

app.use(initSession());

app.use((req, res, next) => {
    res.locals.isLogged = req.session.isLogged;
    next();
});

// Middlewares de configuracion

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('public'));

// Rutas
 
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

// Ruta de error

app.use((req, res) => {
    res.status(404).send('La pagina que buscas no existe.')
});

// Puerto al que escucha la pagina (3003)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
