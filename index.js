const express = require('express');
const routes = require('./routes');
const path =require('path')
const bodyParser = require('body-parser');
//crear una app de express
const app = express();

//donde cargar los archivos estaticos
app.use(express.static('public'));
//Habilitar pug
app.set('view engine', 'pug');
//Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));
//habilitar body parser para leer datos del formulario
app.use(bodyParser.urlencoded({extended: true}));

//rutas para el home
/* app.use('/', (req , res) => {
    res.send('Hola');
}); */

app.use('/', routes());

//puerto del servidor
app.listen(3000);

