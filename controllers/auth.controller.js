const { request, response} = require('express')

const crearUsuario = (req = request, res = response) => {
    res.json({
        ok:true,
        msg:'si señor'
    })
}
const loginUsuario = (req = request, res = response) => {
    res.json({
        ok:true,
        msg:'login'
    })
}

const revalidarToken = (req = request, res = response) => {
    res.json({
        ok:true,
        msg:'renew'
    })
}

module.exports = { 
    crearUsuario,
    loginUsuario,
    revalidarToken
}