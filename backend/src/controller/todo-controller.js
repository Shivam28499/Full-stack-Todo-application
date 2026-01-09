const {todoService} = require('../service');
async function createTodo(req,res){
    console.log("req",req.body);
    try {
        const response = await todoService.createTodo({
        Title: req.body.Title,
        IsCompleted: req.body.IsCompleted
    })
    return res.status(201).json({
            success:true,
            message:"Todo created successfully",
            data:{response},
            error:{}
            })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something Wrong",
            data:{},
            error:{error}
            })
    }
}

async function getTodo(req,res){
    try {
        const response = await todoService.getTodo(req.params.id);
    return res.status(201).json({
            success:true,
            message:"Todo fetch successfully",
            data:{response},
            error:{}
            })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something Wrong",
            data:{},
            error:{error}
            })
    }
}

async function getAllTodo(req,res){
    try {
        const response = await todoService.getAllTodo();
    return res.status(201).json({
            success:true,
            message:"Todos fetch successfully",
            data:{response},
            error:{}
            })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something Wrong",
            data:{},
            error:{error}
            })
    }
}

async function deleteTodo(req,res){
    try {
        const response = await todoService.deleteTodo(req.params.id);
    return res.status(201).json({
            success:true,
            message:"Todo Delete successfully",
            data:{response},
            error:{}
            })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something Wrong",
            data:{},
            error:{error}
            })
    }
}

async function updateTodo(req,res){
    try {
        const response = await todoService.updateTodo(req.params.id,req.body);
    return res.status(201).json({
            success:true,
            message:"Todo update successfully",
            data:{response},
            error:{}
            })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something Wrong",
            data:{},
            error:{error}
            })
    }
}

module.exports = {
    createTodo,
    getTodo,
    getAllTodo,
    deleteTodo,
    updateTodo
}