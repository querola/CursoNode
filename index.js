const express = require('express');
const routes = require('./routes');
const path =require('path')
const bodyParser = require('body-parser');
//const expressValidator = require('express-validator');

//helpers con algunas funciones
const helpers = require('./helpers');
//crear una app de express
const app = express();
//crear la conexion a la BD
const db = require('./config/db');
//importar el modelo
require('./models/proyectos');
//Solo se conecta al servidor authenticate
//sincroniza los cambios al servidor sync
db.sync()
    .then(() => console.log('conectado al servidor'))
    .catch(error => console.log(error));
//agregamos express validator a toda la aplicacion
//app.use(expressValidator());
//donde cargar los archivos estaticos
app.use(express.static('public'));
//Habilitar pug
app.set('view engine', 'pug');
//Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

//pasar var dump a la aplicacion
app.use((req, res, next) => {
    res.locals.vardump = helpers.vardump;
    next();
})

//habilitar body parser para leer datos del formulario
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes());

//puerto del servidor
app.listen(3000);

