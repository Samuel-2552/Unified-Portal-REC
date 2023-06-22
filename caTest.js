function getTest(ipArray, exam) {

    const caTestPattern = /CA TEST (\d+)/;

    console.log(ipArray);

    const catExamArray = [];

    for (let i=0; i<ipArray.length; i++) {
        const str = ipArray[i]['EventTitle'].match(caTestPattern);
        if (str){
            if (str[1]==exam) {
                catExamArray.push(ipArray[i]);
            }
        }
    }

    return catExamArray;
}

module.exports = getTest;