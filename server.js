const express = require('express');
const bodyParser = require('body-parser');

const response = require('./network/response');

const router = express.Router();

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/mensaje', function(req, res){
    console.log(req.headers);
    res.header({
        "Custom-header":"Nuestro valor personalizado",
    });
    response.success(req, res, 'Listado de mensajes');
});

router.post('/mensaje', function (req, res){
    console.log(req.query);
    if (req.query.error == "ok") {
        response.error(req, res, 'Error simulado', 400);
    } else {
        response.success(req, res, 'Mensaje creado correctamente', 201);
    }
});

router.delete('/mensaje', function(req, res){
    console.log(req.query);
    console.log(req.body);
    res.status(201).send([{error:'', body: 'Creado correctamente'}]);
});

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicación esta en el puerto http//localhost:3000');