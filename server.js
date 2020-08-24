const express = require('express');
const router = express.Router();

var app = express();

app.use(router);

router.get('/mensaje', function(req, res){
    res.send('Lista de mensajes')
});

router.post('/mensaje', function (req, res){
    res.send('Mensaje añadido')
});

router.delete('/mensaje', function(req, res){
    res.send('Mensaje eliminado')
});
/* app.use('/',function(req,res){
    res.send('hola');
});
 */
app.listen(3000);
console.log('La aplicación esta en el puerto http//localhost:3000');