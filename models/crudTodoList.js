const db = require('../data/db.js')

const AllTodoLists = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM todo_lists`, function(error, rows){
      if (error) { reject(error) }

      resolve (rows)
    })
  })
}


const SpecificTodoList = (id) => {
  if ( !id ) throw ('Invalid body, requires id of specific todoList')

  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM todo_lists WHERE id = ?`, [id], function(error, row){
      if (error) { reject(error) }
      
      resolve(row)
    })
  })
}

const CreateNewTodoList = (title, color) => {
  if (!(title || color)) throw ('Invalid body, requires title and color')

  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO todo_lists(title,color) VALUES (?, ?)`, [title,color], function(error){
      if (error) { reject(error) }
  
      db.get(`SELECT * FROM todo_lists WHERE id = ?`, [this.lastID], function(err, row){
        if (err) { reject(err) }

        resolve(row)
      })
    })
  })
}

const DeleteTodoList = (id) => {
  if ( !id ) throw ('Invalid body, requires id of specific todoList')

  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM todo_lists WHERE id = ?`, [id], function(error){
      if (error){ reject(error) }
      if (this.changes > 0) { 
        db.run(`DELETE FROM todos WHERE todo_list_id = ?`, [id], function(error){
          if (error){ reject(error) }
    
          resolve(`Removed todo list with id ${id} and all todos in it were deleted`)
        })
      } else {
        resolve(`No todo list with id ${id}`)
      }


    })
  })
}

const PatchTodoList = (id, title, color) => {
  if (!(id || title || color)) throw ('Invalid body, requires id of specific todoList')

  return new Promise((resolve, reject) => {
    db.run(`UPDATE todo_lists SET title = ?, color = ? WHERE id = ? `, [title, color, id], function(error, row){
      if (error) { reject(error) }

      if (this.changes > 0) { resolve(`Todo list with id ${id} patched with color ${color} and title ${title}`) }  
      else { resolve('Unknown error :C') }
    })
  })
}

const GetTodoItemsFromList = (id) => {
  if (!(id)) throw ('Invalid request, requires id of specific todoList')

  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM todos WHERE todo_list_id = ?`, [id], function(error, rows){
      if (error) { reject(error) }
      if (rows.length) { resolve (rows) }

      resolve(`Todo list with id ${id} did not exist or did not have any todos`)
    })
  })
}

module.exports = {
  AllTodoLists,
  SpecificTodoList,
  CreateNewTodoList,
  DeleteTodoList,
  PatchTodoList,
  GetTodoItemsFromList
}