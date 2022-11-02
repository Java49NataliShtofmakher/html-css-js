// console.log("Hello world");
// for (var i = 0; i < 3; i++) {
//     setTimeout(function () {
//         console.log(i)
//     });
// }
// function sum(op1, op2){
//     let res = op1 + op2;
//     return res;
// }
// function sumDigits(number) 
// func should return sum of a given num digit
// ex. consl.log ( sumDigits(123));
// = 6

// *************************** CW12

// let strNum1 = "123";
// let strNum2 = "9";
// console.log(strNum1 + strNum2); // 1239
// console.log(strNum1 - strNum2); // 114
// console.log(strNum1 > strNum2); // false

// let num1 = +strNum1;
// let num2 = +strNum2;
// console.log(num1 + num2); // 132
// console.log(num1 - num2); // 114
// console.log(num1 > num2); // true

// let strNumStr = "123ab";
// let numStr = +strNumStr;
// console.log(numStr);
// let num = parseInt(strNumStr);

// let num10 = 123;
// let strNum10 = "" + num10;
// let strNum16 = num10.toString(16);
// console.log(strNum16);

// conversion from Morse code to number
// " . " => 0   "-" => 1
function fromMorseToNumber(morseCode) {
    let res = 0;
    for (let i = 0; i < morseCode.length; i++) {
        let code = morseCode[i] == '.' ? 0 : 1;
        res = res * 2 + code;
    }
    return res;
}
// console.log(fromMorseToNumber('-.-.-..-'));

function fromNumberToMorse(number) {
    number = Math.abs(number);
    let res = "";
    do {
        let digit = number % 2;
        let sym = digit == 0 ? "." : "-";
        res = sym + res;
        number = Math.trunc(number / 2);

    } while (number != 0)
    return res;
}
// console.log(fromNumberToMorse(169));
//HW
// 10; 16; base
// function fromNumberToString(number, base){}
//getting code from symbol "0" 
console.log('abcz'.charCodeAt(3))

// function fromStringToNumber(string, base){}
//getting symbol from code
// console.log(String.fromCharCode(99))