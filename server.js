const express = require('express');
const bodyParser = require('body-parser');
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
    res.send('Lista de mensajes');
});

router.post('/mensaje', function (req, res){
    res.send('Mensaje añadido');
});

router.delete('/mensaje', function(req, res){
    console.log(req.query);
    console.log(req.body);
    res.send('Mensaje'+ req.body.text +'añadido correctamente');
});
/* app.use('/',function(req,res){
    res.send('hola');
});
 */
app.listen(3000);
console.log('La aplicación esta en el puerto http//localhost:3000');