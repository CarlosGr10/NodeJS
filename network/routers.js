const express = require('express');
const message = require('../components/messages/network');

const routes = function (server){
    server.use('/message', message);
}

// Para poder exportar este archivos
module.exports = routes;