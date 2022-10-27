
function sumDigits(number) {
    if (number < 0){
        number  = number * -1
    }
    let res = 0; 
    let digit;
    do{
        digit = number % 10;
        number = Math.floor(number/10); // to round the number
        res = res + digit;
    }while(number != 0);

    // second solution
    // let strNum = number + '';
    // for( let i = 0; i < strNum.length; i++){
    //     res = res + +strNum[i];
    // }

     return res;
}
console.log(sumDigits(-1234));