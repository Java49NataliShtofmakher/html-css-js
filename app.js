const numbers = [115, 2, 3, 6, -9, 1];
function minMax(numbers) {
    // const max = numbers.reduce((max, num) => (max > num ? max : num));
    // const min = numbers.reduce((min, num) => (min < num ? min : num));
    // return [min, max];

    const getMinMax = (arr, current) => {
        const min = arr[0];
        const max = arr[1];
        if (current > min) {
            arr[1] = current > max ? current : max;
        } else {
            arr[0] = current;
        }
        return arr;
    }
    let minMaxNumbers = numbers.reduce(getMinMax, [numbers[0], numbers[0]]);

    return minMaxNumbers;
}
// console.log(minMax(numbers)); 

let strings = ["abc", "old_abc", "lm", "123", "old_lmn"]
function deleteWithPrefix(strings, prefix) {
    return strings.filter(str => str.indexOf(prefix) === -1);
}
// console.log(deleteWithPrefix(strings, "old"));

let numberAr = [1, 6, 3, 8, 5, 2, 7, 4];
function getSortedEvenOdd(numbers) {
    let res = [];
    let evenArr = [];
    let oddArr = [];
    // 1
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] % 2 == 0 ? evenArr.push(numbers[i]) : oddArr.push(numbers[i]);
    }
    evenArr.sort((a, b) => a - b);
    oddArr.sort((a, b) => (a > b ? -1 : 1));

    return res = [...evenArr, ...oddArr];
}
// console.log(getSortedEvenOdd(numberAr));