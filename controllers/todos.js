const todoModel = require("../models/todosSchema");

const createTodo = (req, res) => {
    const {task , description,deadline,isCompleted,priority} = req.body;
    const newTodo = new todoModel ({task,description,deadline,isCompleted,priority})
    console.log(newTodo);
    newTodo.save()
    .then((result)=>{
        console.log(result);
        res.json('done')
    }).catch((err)=>{
        res.status(401).json({error :err})
    })
};
const getAllTodos = (req,res)=>{
}
const updateTodo = (req, res) => {};
const deleteTodo = (req, res) => {};

module.exports = {
  createTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
};