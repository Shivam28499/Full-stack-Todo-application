const express = require('express');
const router = express.Router();
const {TodoController} = require('../controller');

router.post('/',TodoController.createTodo);
router.get('/:id',TodoController.getTodo);
router.get('/',TodoController.getAllTodo);
router.put('/:id',TodoController.updateTodo);
router.delete('/:id',TodoController.deleteTodo);
module.exports = router;