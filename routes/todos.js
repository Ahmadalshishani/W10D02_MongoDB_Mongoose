const express = require("express");
const {getAllTodos, createTodo} = require("../controllers/todos")
const todosRouter = express.Router();

todosRouter.get("/",getAllTodos);
todosRouter.post("/" , createTodo);
todosRouter.put("/:name");
todosRouter.delete("/:name");

module.exports = todosRouter;