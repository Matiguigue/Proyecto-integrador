const path = require('path');
const credentials = {
    email: "mati@gmail.com",
    password: "mati123"
};

module.exports = {
    login: (req, res) => res.render(path.resolve(__dirname, '../views/auth/login.ejs'),{
        title: "Ingresar"
    }),
    doLogin: (req, res) => {
        const { email, password } = req.body;
        const validateEmail = credentials.email == email;
        const validatepassword = credentials.password == password;

        req.session.isLogged = (validateEmail && validatepassword) ? true : false;

        if(req.session.isLogged){
            res.locals.isLogged = true;
            return res.redirect('admin');
        }
       return res.status(401).send('Credenciales invalidas.');
    },
    register: (req, res) => res.render(path.resolve(__dirname, '../views/auth/register.ejs'), {
        title: "Registrarse"
    }),
    doRegister: (req, res) => res.send('Esta es la ruta que crea un nuevo usuario'),
    logout: (req, res) => res.send('Esta ruta cierra la sesion del usuario'),
}