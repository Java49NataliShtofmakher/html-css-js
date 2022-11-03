// *********CHECK ID NUMBER *******************************************************************
function checkNum(array) {               // check all elements of array that are numbers 
    // function checkNum(element, index, array) {
    // if (typeof +element !== 'number') {
    //     console.log("Wrong ID number");
    //     return;
    // }

    let isError = false;
    for (let i = 0; i < array.length; i++) {
        if (typeof +array[i] !== 'number') {
            isError = true;
            break;
        }
    }
    return isError;
}

function checkIdNumber(arID) {      // make operations with digits according to the algorithm 
    return arID.map(function (num, index) {
        if (index % 2 == 0) {
            return num;
        }
        else {
            num = num * 2;
            if (num > 9) {
                let secondDigit = num % 10;
                let firstDigit = (num - secondDigit) / 10;
                num = secondDigit + firstDigit;
            }
            return num;
        }

    });
}

function getSum(arr) {      //make sum of digits in array
    return arr.reduce(function (res, cur) {
        return res + +cur;
    }, 0)
}

function checkTeudatZehut(teudatStrNumber) {
    let IDstr = teudatStrNumber;
    let arID = Array.from(IDstr);       // making array from given string

    if (arID.length != 9) {         // checking of correct amount of digits
        console.log("Wrong ID number length");
        return;
    }
    // arID.forEach(checkNum); // I cant use method forEach() for checking if there are numbers in arrays, in case there is not, I cant break or stop the function. Thats why I did it another way.

    const isError = checkNum(arID);
    if (isError) return;

    let arCheckedIDnumber = checkIdNumber(arID)

    let sumIDnum = getSum(arCheckedIDnumber)

    if (sumIDnum % 10 == 0) {       // check correctnes of ID
        return true;
    }
    else {
        return false;
    }

}

console.log("The correctness of your ID -> ", checkTeudatZehut("342418944"));
console.log("The correctness of your ID -> ", checkTeudatZehut("342418945"));

// *****************GENERATE ID************************************************
// second part of homework that Yuri said to do yesterday, but isnt written in dropbox, but i alreadu did it

function createID() {
    let newID = [];
    for (let i = 0; i < 8; i++) {
        newID[i] = Math.round(Math.random() * 9);
    }
    return newID;
}

function generateID() {
    const ids = createID();
    const newID = checkIdNumber(ids);
    const sum = getSum(newID)
    const x = sum % 10;

    let ninthNumber = 0;
    if (x !== 0) {
        ninthNumber = 10 - x
    }

    ids[8] = ninthNumber
    return ids.join("")
}


console.log("New generated ID -> ", generateID());