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
// func should return sum of a given num digit
    // ex. consl.log ( sumDigits(123));
    // = 6
function sumDigits(number) {
    let res = 0; 
    // let digit;
    // do{
    //     digit = number % 10;
    //     number = Math.floor(number/10);
    //     res = res + digit;
    // }while(number != 0);

    let strNum = number + '';
    for( let i = 0; i < strNum.length; i++){
        res = res + +strNum[i];
    }
    
     return res;
}
console.log(sumDigits(1234));