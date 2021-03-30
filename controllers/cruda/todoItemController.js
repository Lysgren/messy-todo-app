const crud = require('../../models/crudTodoItems.js')

const AllTodoItems = (req, res, next) => {

  crud.AllTodoItems()
  .then(result => res.json(result))
  .catch(error => res.json(error))
}

const SpecificTodoItem = (req, res, next) => {

  crud.SpecificTodoItem(req.params.id)
  .then(result => res.json(result))
  .catch(error => next(error))
}

const CreateTodoItem = (req, res, next) => {

  crud.CreateTodoItem(req.params.id, req.body.content)
  .then(result => res.json(result))
  .catch(error => next(error))
}

const DeleteTodoItem = (req, res, next) => {

  crud.DeleteTodoItem(req.params.id)
  .then(result => res.json(result))
  .catch(error => next(error))
}

const PatchTodoItem = (req, res, next) => {
  const {content, done} = req.body

  crud.PatchTodoItem(req.params.id, content, done)
  .then(result => res.json(result))
  .catch(error => next(error))
}

module.exports = {
  AllTodoItems,
  SpecificTodoItem,
  CreateTodoItem,
  DeleteTodoItem,
  PatchTodoItem
}