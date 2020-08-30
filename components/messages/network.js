const express = require('express');

// Importamos las respuestas
const response = require('../../network/response');

// Creamos nuestras rutas
const router = express.Router();

router.get('/', function(req, res){
    console.log(req.headers);
    res.header({
        "Custom-header":"Nuestro valor personalizado",
    });
    response.success(req, res, 'Listado de mensajes');
});

router.post('/', function (req, res){
    console.log(req.query);
    if (req.query.error == "ok") {
        response.error(req, res, 'Error inesperado', 500, 'Esto es solo una simulacion de los errores');
    } else {
        response.success(req, res, 'Mensaje creado correctamente', 201);
    }
});

router.delete('/', function(req, res){
    console.log(req.query);
    console.log(req.body);
    res.status(201).send([{error:'', body: 'Creado correctamente'}]);
});

module.exports = router;