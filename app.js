const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

const stu_details = JSON.parse(fs.readFileSync('stu_data.json', 'utf-8'));

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));



async function getDetails(rollNo) {
    const number = stu_details[rollNo][0];

    const data = await fetch("http://rajalakshmi.in/UI/Modules/HRMS/ManageStaffStudent/UniPersonInfo.asmx/BindInternalMarks", {
        "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            "content-type": "application/json; charset=UTF-8",
            "x-requested-with": "XMLHttpRequest",
            "cookie": "G_ENABLED_IDPS=google; ASP.NET_SessionId=gph3kir0ocdmqulpsgf2nbuw; dcjq-accordion=10%2C12",
            "Referer": "http://rajalakshmi.in/UI/Modules/Profile/Profile.aspx?FormHeading=myProfile",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "{\"PersonId\":" + number + ",\"Semester\":4,\"Category\":0}", //filter based on semester, tho, idk waht the category thing does, till now
        "method": "POST"
    });

    return data.text();

}

