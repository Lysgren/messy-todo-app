const express = require('express')
const router = express.Router()
const controller = require ('../controllers/controller.js')

router.get('/alltodolists', controller.GetTodoLists)
router.get('/gettodo', controller.GetSingleTodo)

router.post('/newtodolist', controller.CreateNewTodolist)
router.post('/newtodo', controller.CreateNewTodo)
router.post('/updatetodolist', controller.UpdateTodoList)
router.post('/updatetodo', controller.UpdateTodo)
router.post('/deletetodolist', controller.DeleteTodoList)
router.post('/deletetodo', controller.DeleteTodo)

// 404 error handeling
router.post('/*', controller.NothingFoundPost)
router.get('/*', controller.NothingFoundGet)

module.exports = router