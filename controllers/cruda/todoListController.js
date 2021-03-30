const crud = require('../../models/crudTodoList.js')

const AllTodoLists = (req, res, next) => {

  crud.AllTodoLists()
  .then(result => res.json(result))
  .catch(error => res.json(error))
}

const SpecificTodoList = (req, res, next) => {

  crud.SpecificTodoList(Number(req.params.id))
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
  console.log(req.params.id)
  console.log(typeof req.params.id)

  crud.DeleteTodoList(+req.params.id)
  .then(result => res.json(result))
  .catch(error => next(error))
}

const PatchTodoList = (req, res, next) => {
  const {title, color} = req.body

  crud.PatchTodoList(req.params.id, title, color)
  .then(result => res.json(result))
  .catch(error => next(error))
}

const GetTodoItemsFromList = (req, res, next) => {

  crud.GetTodoItemsFromList(req.params.id)
  .then(result => res.json(result))
  .catch(error => next(error))
}

const AddTodoToSpecificList = (req, res, next) => {

  crud.AddTodoToSpecificList(req.params.list_id, req.params.item_id)
  .then(result => res.json(result))
  .catch(error => next(error))
}

module.exports = {
  AllTodoLists,
  SpecificTodoList,
  CreateNewTodoList,
  DeleteTodoList,
  PatchTodoList,
  GetTodoItemsFromList,
  AddTodoToSpecificList
}