const express = require("express");
const app = express()

app.get("/", (req, res) => {
  res.send(`<center><h1>Hello World</h1></center>`)
})

module.exports = app
