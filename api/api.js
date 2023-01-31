const express = require("express");
const app = express();
const weather = require("weather-js");

app.get("/", (req, res) => {

    const area = req.body.area
    const degreeType = req.body.degree
    const arr = ["C", "F"]

    if(!area) {
        res.json({ status: "Failed", message: "No area provided!"});
        return;
    } else if(!degreeType) {
        res.json({ status: "Failed", message: "No degree type provided!"});
        return;
    } else if(!arr.includes(degreeType)) {
        res.json({ status: "Failed", message: "Incorrect degree"})
        return;
    }

   weather.find({search: area, degreeType: degreeType}, function(err, result) {
       res.json({ status: "Succes", location: result[0].location.name, temperature: result[0].current.temperature, windspeed: result[0].current.windspeed, humidity: result[0].current.humidity, img: result[0].current.imageUrl })

       if(err) {
        res.json({ status: "Failed", error: err});
       }
   })
})

module.exports = app
