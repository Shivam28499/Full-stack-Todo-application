const CrudRepository = require('./crud-repository');
const {Todo} = require('../models');
const { where } = require('sequelize');

class TaskRepository extends CrudRepository{
    constructor(){
        super(Todo);
    }
}

module.exports = TaskRepository;