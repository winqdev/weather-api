const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
let port = 4343;
//Routes
const main = require("./api/main");
const api = require("./api/api");

app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Working on ${port} port`);
});

app.use("/", main)
app.use("/api", api);
