const express = require('express')
require('dotenv').config()

const app = express()

//Directorio publico

app.use( express.static('public') )

app.use('/api/auth', require('./routes/auth.routes'))

app.listen(process.env.PORT, ()=> {
    console.log(`Servidor en puerto ${process.env.PORT}`);
})