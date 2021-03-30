const db = require('../data/db.js')

const AllTodoItems = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM todos`, function(error, rows){
      if (error) { reject(error) }

      resolve (rows)
    })
  })
}

const SpecificTodoItem = (id) => {
  if (!id) throw ('Invalid body, requires Id of single todo')

  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM todos WHERE id = ?`, [id], function(error, row){
      if (error) { reject(error) }
      if (row) { resolve(row) }
      else { resolve(`No matching todo with id ${id}`) }
    })
  })
}

const CreateTodoItem = (todoListID, content) => {
  if (!(todoListID || content)) throw ('Invalid body, requires todoListID and content')

  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO todos(content, todo_list_id) VALUES (?,?)`, [content, todoListID], async function(error){
      if (error) { reject(error) }
      else {
        const row = await SpecificTodoItem(this.lastID)
        resolve(row)
      }
    })
  })
}

const DeleteTodoItem = (id) => {
  if (!id) throw ('Invalid request, needs todo_id')

  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM todos WHERE id = ?`, [id], function(error){
      if (error){ reject(error) }
      if (this.changes == 0) { resolve(`Todo with id ${id} not found`) }  

      resolve('Todo deleted')
    })
  })
}

const PatchTodoItem = (id, content, done) => {
  if (!(id || content || done)) throw ('Invalid body, requires id, content and done of todo')

  return new Promise((resolve, reject) => {
    db.run(`UPDATE todos SET content = ?, done = ? WHERE id = ? `, [content, done, id], function(error, row){
      if (error) { reject(error) }
      if (this.changes == 0) { resolve('Unknown error :C') }

      resolve(`Todo list with id ${id} patched with content ${content} and done ${done}`)
    })
  })
}

 
module.exports = {
  AllTodoItems,
  SpecificTodoItem,
  CreateTodoItem,
  DeleteTodoItem,
  PatchTodoItem
}