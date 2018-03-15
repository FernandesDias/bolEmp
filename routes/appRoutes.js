const express = require('express');
const router = express.Router();
const Boletos = require('../models/dataSchema');

router.post('/create', (req,res,next) =>{
    var novoBoleto = new Boletos({
        nomeEmpresa: req.body.nomeEmpresa,
        dados: req.body.dados
    });
    novoBoleto.save((err, boleto) =>{
        if(err){
            res.status(500).json({errmsg: err});
        }
        res.status(200).json({msg: boleto});
    });
});

router.get('/read', (req,res,next) =>{
    Boletos.find({}, (err, boletos) =>{
        if(err){
            res.status(500).json({errmsg: err});
        }
        res.status(200).json({msg: boletos});
    });
});

router.get('/read/:id', (req,res,next) =>{
    Boletos.findById(req.body._id, (err, boletos) =>{
        if(err){
            res.status(500).json({errmsg: err});
        }
        boletos.nomeEmpresa = req.body.nomeEmpresa;
        boletos.dados = req.body.dados;
        res.status(200).json({msg: boletos});
    });
});

router.put('/update', (req,res,next) =>{
    
    Boletos.findById(req.body._id, (err, boletos) =>{
        if(err){
            res.status(500).json({errmsg: boletos});
        }
        boletos.nomeEmpresa = req.body.nomeEmpresa;
        boletos.dados = req.body.dados;
        
        boletos.save((err, boletos) =>{
            if(err){
                res.status(500).json({errmsg: err});
            }
            res.status(200).json({msg: boletos});
        });
    });
});

router.delete('/delete/:id', (req,res,next) =>{
    
    Boletos.findByIdAndRemove({_id: req.params.id}, (err, boletos) =>{
        if(err){
            res.status(500).json({errmsg: err});
        }
        res.status(200).json({msg: boletos});
    });
});

module.exports = router;