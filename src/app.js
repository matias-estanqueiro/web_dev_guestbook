//----- Modulos para configurar el servidor
const express = require('express');
const path = require('path');
const morgan = require('morgan');

//----- Inicializaciones
const app = express();

//----- Configuraciones
// Puerto
app.set('port', process.env.PORT || 3000);
// Ubicacion carpeta view (vistas) 
app.set('views', path.join(__dirname, 'views'));
// Motor de vistas -> EJS
app.set('view engine', 'ejs');

//----- Middlewares
// Descripcion por consola de las peticiones
app.use(morgan('dev'));
// Obtenemos un dato del lado del cliente y lo transformamos en objeto JSON
app.use(express.urlencoded({extended: false}));

//----- Rutas
app.use(require("./routes/guestbook_routes"));

//----- Error 404
app.use((req, res) => {
    res.status(404).render('./pages/404');
});

//----- Empezando la aplicacion
app.listen(app.get('port'), () =>{
    console.log('Servidor en puerto:', app.get('port'));
});