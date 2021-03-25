require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

const controller = require ('./controllers/controller.js')
const middleware = require ('./middleware/middleware.js')

app.use(express.json())

app.use(middleware.HandleRequest)
app.use(middleware.ErrorHandeling)

// app.post('/GetTodoLists', (req, res) => controller.GetTodoLists(req, res))
app.get('/alltodolists', controller.GetTodoLists)
app.post('/newtodolist', controller.CreateNewTodolist)
app.post('/newtodo', controller.CreateNewTodo)
app.post('/gettodo', controller.GetSingleTodo)
app.post('/updatetodolist', controller.UpdateTodoList)
app.post('/updatetodo', controller.UpdateTodo)
app.post('/deletetodolist', controller.DeleteTodoList)

app.listen(PORT, () => console.log(`Running on port ${PORT}`))