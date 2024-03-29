const request = require("supertest");
const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes/index')

app.use(require("cors")());

//bodyparser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(routes)


app.listen(port, () => {
  console.log(`Chat bot web app listening at http://localhost:${port}`)
})

module.exports = app;