// const person = {
//     id: 123,
//     name: "Vasya",
//     last_name: "Ivanov",
//     year: 2000,
//     address: {city: "NY", street: "Lords", house_nuber: 8}
// }
// const name1 = getAddres();
// function getAddres(){
//     return app;
// }
// const yearExp = "ye" + "ar";
// console.log(person.year);
// console.log(person.address[name1]);

const strings = ["a","opr","lmn", "abc", "lmn", "lmn", "abc", "a"];

function displayOccurance(strings){
    const occurances = {};
    strings.forEach(element => {
        if (occurances[element]){
            occurances[element]++;
        }else{
            occurances[element] = 1;
        }
    });
    // console.log(Object.entries(occurances)); 
    const occurancesArr = Object.entries(occurances);
    occurancesArr.sort((e1,e2) => e2[1] - e1[1])
    console.log(occurancesArr);
}
displayOccurance(strings);