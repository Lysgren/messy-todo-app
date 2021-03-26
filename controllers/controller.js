const crud = require('../models/crud.js')

const GetTodoLists = (req, res) => {
  
  crud.GetTodoLists()
  .then(result => res.json(result))
  .catch(error => res.json(error))
}

const CreateNewTodolist = (req, res, next) => {
  const {title, color} = req.body

  crud.CreateNewTodolist(title, color)
  .then(result => res.json(result))
  .catch(error => next(error))
}

const CreateNewTodo = (req, res, next) => {
  const {todoListID, content} = req.body

  crud.CreateNewTodo(todoListID, content)
  .then(result => res.json(result))
  .catch(error => next(error))
}

const GetSingleTodo = (req, res, next) => {
  const {id} = req.body

  crud.GetSingleTodo(id)
  .then(result => res.json(result))
  .catch(error => next(error))
}

const UpdateTodoList = (req, res, next) => {
  const {id, title, color} = req.body

  crud.UpdateTodoList(id, title, color)
  .then(result => res.json(result))
  .catch(error => next(error))
}

const UpdateTodo = (req, res, next) => {
  const {id, content, done} = req.body    

  crud.UpdateTodo(content, done, id)
  .then(result => res.json(result))
  .catch(error => next(error))
}

const DeleteTodoList = (req, res, next) => {
  const {id} = req.body

  crud.DeleteTodoList(id)
  .then(result => res.json(result))
  .catch(error => next(error))
}

const DeleteTodo = (req, res, next) => {
  const {id} = req.body

  crud.DeleteTodo(id)
  .then(result => res.json(result))
  .catch(error => next(error))
}

const NothingFoundGet = (req, res) => {
    res.status(404).json({error: '404: Page not Found'})
}

const NothingFoundPost = (req, res) => {
  res.status(404).json({error: '404: Could not post'})
}

module.exports = {
  GetTodoLists,
  CreateNewTodolist,
  CreateNewTodo,
  GetSingleTodo,
  UpdateTodoList,
  UpdateTodo,
  DeleteTodoList,
  DeleteTodo,
  NothingFoundGet,
  NothingFoundPost
}