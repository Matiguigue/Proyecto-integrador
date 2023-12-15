const path = require('path');

module.exports = {
    login: (req, res) => res.render(path.resolve(__dirname, '../views/auth/login.ejs'),{
        title: "Ingresar"
    }),
    doLogin: (req, res) => res.send('Esta es la ruta que valida los datos de login'),
    register: (req, res) => res.render(path.resolve(__dirname, '../views/auth/register.ejs'), {
        title: "Registrarse"
    }),
    doRegister: (req, res) => res.send('Esta es la ruta que crea un nuevo usuario'),
    logout: (req, res) => res.send('Esta ruta cierra la sesion del usuario'),
}