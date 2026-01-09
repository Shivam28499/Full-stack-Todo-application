const { response } = require('express');
const {TaskRepository} = require('../repositories');
const taskRepository = new TaskRepository();

async function createTodo(data) {
    try {
        const response = await taskRepository.create(data);
        return response;
    } catch (error) {
        throw error;
    }
}

async function getTodo(id) {
    try {
        const response = await taskRepository.get(id);
        return response;
    } catch (error) {
        throw error;
    }
}

async function getAllTodo(){
    try {
        const response = await taskRepository.getAll();
        return response;
    } catch (error) {
        throw error;
    }
}

async function deleteTodo(id){
    try {
        const response = await taskRepository.destroy(id);
        return response;
    } catch (error) {
        throw error;
    }
}

async function updateTodo(id,data){
    console.log("id: ",id, "data: ",data);
    try {
        const response = await taskRepository.update(id,data);
        return response;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    createTodo,
    getAllTodo,
    getTodo,
    deleteTodo,
    updateTodo
}