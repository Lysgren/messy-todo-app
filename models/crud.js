const db = require('../data/db.js')

const GetTodoLists = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM todo_lists`, function(error, rows){
      if (error) { reject(error) }

      resolve (rows)
    })
  })
}

const CreateNewTodolist = (title, color) => {
  if (!(title || color)) throw ('Invalid body, needs title and color')

  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO todo_lists(title,color) VALUES (?, ?)`, [title,color], function(error){
      if (error){ reject(error) }
  
      db.get(`SELECT * FROM todo_lists WHERE id = ?`, [this.lastID], function(err, row){
        if (err){ reject(err) }

        resolve(row)
      })
    })
  })
}

const CreateNewTodo = (todoListID, content) => {
  if (!(todoListID || content)) throw ('Invalid body, needs todoListID and content')

  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO todos(content, todo_list_id) VALUES (?,?)`, [content, todoListID], async function(error){
      if (error) { reject(error) }
      else {
        const row = await GetSingleTodo(this.lastID)

        resolve(row)
      }
    })
  })
}

const GetSingleTodo = id => {
  if (!id) throw ('Invalid body, Id of single todo')

  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM todos WHERE id = ?`, [id], function(error, row){
      if (error) { reject(error) }
      
      resolve(row)
    })
  })
}

const UpdateTodoList = (id, title, color) => {
  if (!(id || title || color)) throw ('Invalid body, needs id, title and color')

  return new Promise((resolve, reject) => {
    db.run(`UPDATE todo_lists SET title = ?, color = ? WHERE id = ?`, [title, color, id], function(error){
      if (error) { reject(error) }

      resolve('Todo list updated')
    })
  })
}

const UpdateTodo = (content, done, id) => {
  if (!(id || content || done)) throw ('Invalid body, needs content, done and id')

  return new Promise((resolve, reject) => {
    db.run(`UPDATE todos SET content = ?, done = ? WHERE id = ?`, [content, done, id], function(error) {
      if (error) { reject(error) }
      
      resolve('Todo updated')
    })
  })
}

const DeleteTodoList = id => {
  if (!id) throw ('Invalid request, needs todo_list_id')

  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM todo_lists WHERE id = ?`, [id], function(error){
      if (error){ reject(error) }
      db.run(`DELETE FROM todos WHERE todo_list_id = ?`, [id], function(error){
        if (error){ reject(error) }
        if (this.changes == 0) { resolve(`Todo list with id ${id} not found`) }  
  
        resolve('Todo list deleted')
      })
    })
  })
}

const DeleteTodo = id => {
  if (!id) throw ('Invalid request, needs todo_id')

  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM todos WHERE id = ?`, [id], function(error){
      if (error){ reject(error) }
      if (this.changes == 0) { resolve(`Todo with id ${id} not found`) }  

      resolve('Todo deleted')
    })
  })
}

module.exports = {
  GetTodoLists,
  CreateNewTodolist,
  CreateNewTodo,
  GetSingleTodo,
  UpdateTodoList,
  UpdateTodo,
  DeleteTodoList,
  DeleteTodo
}