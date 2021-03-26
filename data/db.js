const sqlite = require('sqlite3')
const db = new sqlite.Database("todos.db")

/* 
db.serialize(() => {
  
  db.run("DROP TABLE IF EXISTS todo_lists")
  db.run("DROP TABLE IF EXISTS todos")
  db.run(`CREATE TABLE "todo_lists" ("id"	INTEGER,"title"	TEXT NOT NULL,"color"	TEXT NOT NULL DEFAULT 'white',PRIMARY KEY("id" AUTOINCREMENT));`)
  db.run(`CREATE TABLE "todos" ("id"	INTEGER,"content"	TEXT NOT NULL DEFAULT '',"done" INTEGER NOT NULL DEFAULT 0,"todo_list_id"	INTEGER,PRIMARY KEY("id" AUTOINCREMENT),FOREIGN KEY("todo_list_id") REFERENCES "todo_lists"("id"));`)
  db.get("PRAGMA foreign_keys = ON") // Enable SQL error on foreign key constraints

  db.run(`INSERT INTO todo_lists (title, color)
      VALUES ("Grillkorv", "Röd")
  `)

  db.run(`INSERT INTO todo_lists (title, color)
  VALUES ("Motorolja", "Svart")
  `)

  db.run(`INSERT INTO todos (content, done, todo_list_id) VALUES ("Köp snus", 1, 1)`)
  db.run(`INSERT INTO todos(content, done, todo_list_id) VALUES ("Köpa bärs", 0, 2)`)
  db.run(`INSERT INTO todos(content, done, todo_list_id) VALUES ("Sova tidigt", 0, 2)`)
  db.run(`INSERT INTO todos(content, done, todo_list_id) VALUES ("Läsa bok", 1, 2)`)
})

 */
module.exports = db