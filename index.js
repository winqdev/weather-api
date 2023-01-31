const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
let port = 4343;
//Routes
const api = require("./api/api");

app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Working on ${port} port`);
});

app.get("/", (req, res) => {
    app.send(`<center><h1>Hello World</h1></center>`)
})

app.use("/api", api);
