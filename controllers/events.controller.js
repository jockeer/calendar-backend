const { request, response } = require('express')

const getEventos = ( req = request, res = response ) => {

    res.json({
        ok:true,
        msg:'Obtener eventos'
    })

}
const crearEvento = ( req = request, res = response ) => {

    res.json({
        ok:true,
        msg:'Crear eventos'
    })

}
const actualizarEvento = ( req = request, res = response ) => {

    res.json({
        ok:true,
        msg:'Actualizar eventos'
    })

}
const eliminarEvento = ( req = request, res = response ) => {

    res.json({
        ok:true,
        msg:'Eliminar eventos'
    })

}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}