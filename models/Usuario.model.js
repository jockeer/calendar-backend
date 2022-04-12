const {Schema, model} = require("mongoose");

const Usuario = model('Usuario', {
    name: {
    type: String,
    require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    }
})
module.exports = Usuario

// const UsuarioSchema = Schema({

//     name: {
//         type: String,
//         require: true
//     },
//     email:{
//         type: String,
//         require: true,
//         unique: true
//     },
//     password:{
//         type: String,
//         require: true
//     }
// })

// module.exports = model('Usuario', UsuarioSchema)