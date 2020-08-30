const express = require('express');
const bodyParser = require('body-parser');

//const router = require('./components/messages/network')
//importamos nuetras rutas
const router = require('./network/routers');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router); nos servia para utilizar los middlewares de express

// Pasar nuestro use en routers.js
router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicación esta en el puerto http//localhost:3000');