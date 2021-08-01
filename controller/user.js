const { response, request } = require('express');

const usuarioGet = (req, res= response) => {
    const {query,nombre = 'No name', apikey = 'No api Key', page= 1, limit} = req.query;

    res.json({
        'message':'get Api - Controlador',
        query,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuarioPost = (req, res= response) => {
    
    const {nombre, edad} = req.body;

    res.json({
        'message':'post Api - Controlador',
        nombre,
        edad
    });
}

const usuarioPut = (req, res= response) => {
    
    const id = req.params.id;

    res.json({
        'message':'put Api - Controlador',
        id
    });
}

const usuarioDelete = (req, res= response) => {
    
    res.json({
        'message':'delete Api - Controlador'
    });
}


module.exports = {
    usuarioGet, usuarioPost, usuarioPut, usuarioDelete
}