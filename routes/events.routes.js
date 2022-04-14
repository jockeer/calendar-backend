const { Router } = require("express");
const { check } = require("express-validator");
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events.controller");
const { isDate } = require("../helpers/isDate");
const { validate } = require("../middlewares/validate");
const { validarJWT } = require("../middlewares/validateJWT");

const router = Router()

router.use(validarJWT) //! Para que todas las rutas de este archivo tengas la validacion del token sin escribirlas en cada una

//Obenter eventos
router.get('/', getEventos)

//crear evento
router.post('/',[
    check('title','El titulo es necesario').notEmpty(),
    check('start', 'La fecha de inicio en obligatoria').custom(isDate),
    check('end', 'La fecha de finalizacion en obligatoria').custom(isDate),
    validate
], crearEvento)

//actualizar evento
router.put('/:id',[
    check('title','El titulo es necesario').notEmpty(),
    check('start', 'La fecha de inicio en obligatoria').custom(isDate),
    check('end', 'La fecha de finalizacion en obligatoria').custom(isDate),
    validate
],actualizarEvento)

//borrar evento
router.delete('/:id', eliminarEvento)

module.exports = router