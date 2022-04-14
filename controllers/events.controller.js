const { request, response } = require('express');
const Evento = require('../models/Evento.model');

const getEventos = async ( req , res = response ) => {

    const eventos = await Evento.find().populate('user', 'name')

    res.json({
        ok:true,
        eventos
    })

}
const crearEvento = async( req = request, res = response ) => {

    const evento = new Evento(req.body)
    try {
        evento.user = req.uid
        await evento.save()
        res.status(201).json({
            ok:true,
            evento
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })

    }

}
const actualizarEvento = async( req = request, res = response ) => {
    const eventoID = req.params.id
    const uid = req.uid
    try {
        const evento = await Evento.findById(eventoID)
        if (!evento) {
            return res.status(404).json({
                ok:false,
                msg:'El evento no existe'
            })
        }

        if (evento.user.toString() !== uid) {
            return res.status(401).json({
                ok:false,
                msg:'No tiene privilegio de editar este evento'
            })
        }

        const nuevoEvento = {
            ...req.body,
            user:uid
        }
       const eventoActualizado = await Evento.findByIdAndUpdate(eventoID, nuevoEvento, { new:true })

        res.status(200).json({
            ok:true,
            evento :eventoActualizado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
    }
    

}
const eliminarEvento = async ( req = request, res = response ) => {

    const eventoID = req.params.id
    const uid = req.uid
    try {
        const evento = await Evento.findById(eventoID)
        if (!evento) {
            return res.status(404).json({
                ok:false,
                msg:'El evento no existe'
            })
        }

        if (evento.user.toString() !== uid) {
            return res.status(401).json({
                ok:false,
                msg:'No tiene privilegio para eliminar este evento'
            })
        }

       const eventoEliminado = await Evento.findByIdAndDelete(eventoID)

        res.status(200).json({
            ok:true,
            evento :eventoEliminado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
    }

}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}