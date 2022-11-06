let ar = [];
ar[10000] = 100;
ar[1] = [1, 2, 3];
console.log("length of array", ar.length);
ar[0] = "hello";
console.log("10000-th element = ", ar[10000]);
console.log("0-th element  = ", ar[0]);
console.log("1-th element  = ", ar[1]);

let str = "hello";
let arStr = Array.from(str); // getting array of the string's symbols
console.log("String 'hello' -> arraay is ", arStr);

// for (let i = 0; i < arStr.length; i++){
//     console.log(arStr[i]);
// }

function println(element , index, array){
    console.log("element at index ",index, element);
}
arStr.forEach(println);

let arCodeAscii = arStr.map(function(symbol, index){
    return symbol.charCodeAt();
    // return index % 2 == 0 ? symbol.charCodeAt() : symbol;
})
console.log(arStr, arCodeAscii);

let sumAscii = arStr.reduce(function(res, cur){
    return res + cur.charCodeAt();
},0)  // res = 0 iznachalnoe znachenie res
console.log(sumAscii);
console.log(arStr.reduce(function(res,cur){
    return res + cur // res = ""
}, ""));

//hw
// function checkTZ(teudatNumber(string))
// control sum for even index gidit value 
// return true false
