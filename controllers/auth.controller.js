const { request, response} = require('express')
const Usuario = require('../models/Usuario.model')



const crearUsuario = async (req = request, res = response) => {

    
    try {
        const usuario = new Usuario(req.body)
        await usuario.save()
        res.status(201).json({
            ok:true,
            msg:'si señor',
            user: req.body
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por Favor hable con el administrador'
        })
    }


}

const loginUsuario = (req = request, res = response) => {

    const { email, password } = req.body
    
    res.json({
        ok:true,
        msg:'login',
        
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