const express = require('express')
const router = express.Router()

const todoListController = require ('../controllers/cruda/todoListController.js')
const todoItemController = require ('../controllers/cruda/todoItemController.js')
const _404Controller = require ('../controllers/cruda/404.js')

// Todo lists
router.get('/todolists/:id', todoListController.SpecificTodoList)
router.get('/todolists', todoListController.AllTodoLists)
router.post('/todolists', todoListController.CreateNewTodoList)
router.delete('/todolists/:id', todoListController.DeleteTodoList)
router.patch('/todolists/:id', todoListController.PatchTodoList)

// Todo items
router.get('/todoitems/:id', todoItemController.SpecificTodoItem)
router.get('/todoitems', todoItemController.AllTodoItems)
router.delete('/todoitems/:id', todoItemController.DeleteTodoItem)
router.patch('/todoitems/:id', todoItemController.PatchTodoItem)

// Todo item in specific lists
router.get('/todolists/:id/todoitems', todoListController.GetTodoItemsFromList)
router.post('/todolists/:id/todoitems', todoItemController.CreateTodoItem)

// 404 error handeling
router.post('/*', _404Controller.NothingFoundPost)
router.get('/*', _404Controller.NothingFoundGet)

module.exports = router