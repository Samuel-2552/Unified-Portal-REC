function getTest(ipArray, exam) {

    const caTestPattern = /CA TEST (\d+)/;
    const catExamArray = [];

    for (let i=0; i<ipArray.length; i++) {
        const str = ipArray[i]['EventTitle'].match(caTestPattern);
        if (str){
            if (str[1]==exam) {
                ipArray[i]['EventTitle'] = str[0];
                catExamArray.push(ipArray[i]);
            }
        }
    }

    return catExamArray;
}

module.exports = getTest;