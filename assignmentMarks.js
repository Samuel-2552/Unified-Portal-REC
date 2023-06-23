function assignmentMarks(ipArray) {
    const assignPattern = /ASSIGNMENT\s*([^/]+)/;
    const assignmentArray = [];

    for (let i=0; i<ipArray.length; i++) {
        const str = ipArray[i]['EventTitle'].match(assignPattern);
        if (str) {
            assignmentArray.push(ipArray[i]);
        }
    }

    return assignmentArray;
}


module.exports = assignmentMarks;
