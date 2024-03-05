const mongoose =require("mongoose")
/**task, description, deadline, isCompleted, and priority */

const todosSchema = new mongoose.Schema({
    task: String
    ,description : String
    ,deadline : Number
    ,isCompleted : {type:Boolean ,required:true}
    ,priority : String
})
module.exports = mongoose.model ("Todos", todosSchema)