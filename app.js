require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

const middleware = require ('./middleware/middleware.js')
const errorHandle = require ('./errors/errors.js')
// const routes = require ('./routes/routes.js')
const routes = require ('./routes/newRoutes.js')

app.use(express.json())

app.use(errorHandle.WrongHeader)
app.use(middleware.HandleRequest)
app.use(routes)
app.use(errorHandle.WrongBody)

app.listen(PORT, () => console.log(`Running on port ${PORT}`))
