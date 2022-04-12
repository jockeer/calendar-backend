const { request, response} = require('express')

const crearUsuario = (req = request, res = response) => {
    
    const { name, email, password } = req.body

    res.json({
        ok:true,
        msg:'si señor',
        user: req.body
    })

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