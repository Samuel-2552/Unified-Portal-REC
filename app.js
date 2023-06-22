const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

const parseData = require("./parseData");


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


var response = ''



app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

var rollNumber = '';

app.post("/", function(req, res) {
    rollNumber = req.body.rollnumber;
    res.redirect("/details");
});



app.get("/details", function(req, res) {
    res.sendFile(__dirname + "/views/selection.html");
});

app.post("/details", function(req, res) {
    const semester = req.body.semester;
    const choice = req.body.choice; 

    if (choice == 1) {

        const cat = req.body.catNumber;

        parseData(rollNumber, semester, choice, cat).then(function (data) {
            let toBeSent = '<table>';
            toBeSent += "<tr><th>Subject</th><th>U1</th><th>U2</th><th>U3</th><th>U4</th><th>U5</th><th>Total</th></tr>"
            data.forEach(function (obj) {
                toBeSent += "<tr>";
                toBeSent += `<td>${obj.SubjName}</td>`;
                toBeSent += `<td>${obj.U1}</td>`;
                toBeSent += `<td>${obj.U2}</td>`;
                toBeSent += `<td>${obj.U3}</td>`;
                toBeSent += `<td>${obj.U4}</td>`;
                toBeSent += `<td>${obj.U5}</td>`;
                toBeSent += `<td>${obj.Total}</td>`; // Display the total
                toBeSent += "</tr>";
            });

            toBeSent += "</table>";
            res.send(toBeSent);

        });
    }
    else {
        parseData(rollNumber, semester, choice).then((data) => {
            res.send(data);
        });

    }

});




app.listen(3000, function() {
    console.log("Server started on port 3000");
});
