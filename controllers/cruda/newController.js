const crud = require('../../models/cruda.js')

const AllTodoLists = (req, res, next) => {

  crud.AllTodoLists()
  .then(result => res.json(result))
  .catch(error => res.json(error))
}

const SpecificTodoList = (req, res, next) => {

  crud.SpecificTodoList(req.params.id)
  .then(result => res.json(result))
  .catch(error => next(error))
}

const CreateNewTodoList = (req, res, next) => {
  const {title, color} = req.body

  crud.CreateNewTodoList(title, color)
  .then(result => res.json(result))
  .catch(error => next(error))
}

const DeleteTodoList = (req, res, next) => {

  crud.DeleteTodoList(req.params.id)
  .then(result => res.json(result))
  .catch(error => next(error))
}

const PatchTodoList = (req, res, next) => {
  const {title, color} = req.body

  crud.PatchTodoList(req.params.id, title, color)
  .then(result => res.json(result))
  .catch(error => next(error))
}

const NothingFoundGet = (req, res) => {
  res.status(404).json({error: '404: Page not Found'})
}

const NothingFoundPost = (req, res) => {
res.status(404).json({error: '404: Could not post'})
}