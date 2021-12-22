const {Schema,model}=require('mongoose')

const todoSchema=new Schema({
    title:String,
    isCompleted:Boolean

})

//Model
const Todo=('Todo',todoSchema)

module.exports = Todo