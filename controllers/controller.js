const crud = require('../models/crud.js')

const GetTodoLists = (req, res) => {
  crud.GetTodoLists()
  .then(result => res.json(result))
  .catch(error => res.json(error))
}

const CreateNewTodolist = (req, res) => {
  const {title, color} = req.body
  if(!(title || color)){
    return res.status(400).json({error: "Invalid body"})
  }

  crud.CreateNewTodolist(title, color)
  .then(result => res.json(result))
  .catch(error => res.json(error))
}

const CreateNewTodo = (req, res) => {
  const {todoListID, content} = req.body
  if (!(todoListID || content)){
    return res.status(400).json({error: 'Invalid body'})
  }
  crud.CreateNewTodo()
  .then(result => res.json(result))
  .catch(error => res.json(error))
}

const GetSingleTodo = (req, res) => {
  const {id} = req.body
  if(!id){ 
    return res.status(400).json({error: 'Invalid body'})
  }

  crud.GetSingleTodo()
  .then(result => res.json(result))
  .catch(error => res.json(error))
}

const UpdateTodoList = (req, res) => {
  const {id, title, color} = req.body
  if (!(id || title || color)){
    return res.status(400).json({error: 'Invalid body'})
  }

  crud.UpdateTodoList()
  .then(result => res.json(result))
  .catch(error => res.json(error))
}

const UpdateTodo = (req, res) => {
  const {id, content, done} = req.body    
  if (!(id || content || done)){ 
    return res.status(400).json({error: "Invalid body"})
  }

  crud.UpdateTodo()
  .then(result => res.json(result))
  .catch(error => res.json(error))
}

const DeleteTodoList = (req, res) => {
  const {id} = req.body
  if (!id){
    return res.status(400).json({error: 'Invalid body, missing id'})
  }

  crud.DeleteTodoList()
  .then(result => res.json(result))
  .catch(error => res.json(error))
}

module.exports = {
  GetTodoLists,
  CreateNewTodolist,
  CreateNewTodo,
  GetSingleTodo,
  UpdateTodoList,
  UpdateTodo,
  DeleteTodoList
}