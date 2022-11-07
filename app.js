let strings = ["abc", "lmn", "cd", "xyz", "123"];

function ulSurround(array) {
    const start = "<li>";
    const finish = "</li>";
    array.push("</ul>");
    array.splice(0, 0, "<ul>");

    for (let i = 1; i < array.length - 1; i++) {
        array[i] = start + array[i] + finish;
    }
    return array;
}

let ulSurrounding = ulSurround(strings);
// console.log(ulSurrounding);

//**********************************************************
let strings1 = ["abc", "lmn", "cd", "abc", "abc"];

function count(array, str) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === str)
            counter++;
    }
    return counter;
}
// console.log(count(strings1, "abc"));

//**********************************************************

let arS = [1, 2, 3, 4, 5, 6, 7];
let arD = [10, 20, 30, 40, 50, 60, 70];
function arrayCopy(src, srcPos, dst, dstPos, length) {
    let copyPart = src.slice(srcPos, srcPos + length);
    dst.splice(dstPos, 0, ...copyPart);

    return dst;
}
// console.log(arrayCopy(arS, 3, arD, 4, 3));

//**********************************************************
let numbers = [1, 2, 3, 4, 5, 6, 7];

function move(array, index, offset) {
    const offsetRule = index + offset;
    if (index >= 0 && index < array.length && offsetRule > 0 && offsetRule < array.length) {
        let cutPart = array.splice(index, 1);
        array.splice(index + offset, 0, ...cutPart);
        return array;
    }
    return "ERROR"

}
// console.log(move(numbers, 2, 3));