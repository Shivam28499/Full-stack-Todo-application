const express = require('express');
const router = express.Router();
const TodoRoutes = require('./todo-route');
router.use('/todos',TodoRoutes);
module.exports = router;