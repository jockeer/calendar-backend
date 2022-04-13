const { Router } = require("express");
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events.controller");
const { validarJWT } = require("../middlewares/validateJWT");

const router = Router()

router.use(validarJWT) //! Para que todas las rutas de este archivo tengas la validacion del token sin escribirlas en cada una

//Obenter eventos
router.get('/' , getEventos)

//crear evento
router.post('/', crearEvento)

//actualizar evento
router.put('/:id', actualizarEvento)

//borrar evento
router.delete('/:id', eliminarEvento)

module.exports = router