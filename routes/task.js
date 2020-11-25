const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
require("../models/Task");
const Task = mongoose.model("tasks");

//Listar Tarefas
router.get('/', (req, res) => {
    Task.find().sort({name: 'asc'}).then((tasks) => {
        res.status(200).json(tasks);
    }).catch(() => {
        res.status(500).json({"message": "Falha ao processar requisição. Erro ao buscar tarefa no Database."});
    });
});

//Adicionar Tarefa
router.post('/', (req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.status(400).json({"message": "Falha ao processar requisição. Parâmetros Inválidos."});
    } else {        
        new Task({
            text: req.body.text  
        }).save().then(() => {
            res.status(201).json({"message": "Tarefa adicionada com sucesso."});
        }).catch(() => {
            res.status(500).json({"message": "Falha ao processar requisição. Erro ao adicionar tarefa no Database."});
        });           
    }   
});

//Atualizar Tarefa
router.put('/:id', (req, res) => {

    Task.findOne({_id: req.params.id}).then((task) => {
        
        task.marked = req.body.marked

        task.save().then(() => {
            res.status(201).json({"message": "Tarefa atualizada com sucesso."});
        }).catch((error) => {
            res.status(500).json({"message": "Falha ao processar requisição. Erro ao atualizar tarefa no Database."});
        });
         
    }).catch((error) => {
        res.status(500).json({"message": "Falha ao processar requisição. Erro ao atualizar tarefa no Database."});
    });
});

//Remover Tarefa
router.delete('/:id', (req, res) => {
    Task.deleteOne({_id: req.params.id}).then(() => {
        res.status(200).json({error: "Tarefa removida com sucesso."});
    }).catch(() => {
        res.status(500).json({error: "Falha ao processar requisição. Erro ao remover tarefa no Database."});
    }); 
});

module.exports = router;