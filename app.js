const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

const parseData = require("./parseData");
const { parse } = require('path');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


var body = ''



app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

var rollNumber = '';

app.post("/", function(req, res) {
    rollNumber = req.body.rollnumber;

    parseData(rollNumber).then(function(data) {
        body = JSON.stringify(data);
        res.redirect("/details");
    })

    
    

});



app.get("/details", function(req, res) {
    res.send(body);
})


app.listen(3000, function() {
    console.log("Server started on port 3000");
});
