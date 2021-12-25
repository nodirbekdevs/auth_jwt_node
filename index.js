const express = require('express')
const db = require('./utils/db')
const middleware = require('./utils/helper')
const {PORT} = require('./utils/keys')

const app = express()
middleware(app)

const start = async () => {
  try {
    await db
    app.listen(PORT, () => {console.log(`Server running on ${PORT} port`)})
  } catch (error) {console.log(`Mistake is ${error}`)}
}

start()
