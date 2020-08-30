const express = require('express');

// Importamos las respuestas
const response = require('../../network/response');

// Importamos nuestros controlador
const controller = require('./controller');

// Creamos nuestras rutas
const router = express.Router();

router.get('/', function(req, res){
    console.log(req.headers);
    res.header({
        "Custom-header":"Nuestro valor personalizado",
    });
    response.success(req, res, 'Listado de mensajes');
});

router.delete('/', function(req, res){
    console.log(req.query);
    console.log(req.body);
    res.status(201).send([{error:'', body: 'Creado correctamente'}]);
});

router.post('/', function (req, res){
    
    // Funcion del controler
    controller.addMesage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador');
        });

});


module.exports = router;