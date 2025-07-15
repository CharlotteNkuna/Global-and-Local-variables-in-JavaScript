//getting the number of items in an array
let courses = ["Html", "Css", "Javascript", "React"];
let total  = courses.length;

//push method: adds an element at the end of array
courses.push("Typescript");
//unshift; add element at the begining of an array
courses.unshift("NodeJs");

console.log(`The total number in an array is ${total}`);



//to show the elements inside an array
console.log(`The elements inside an array are: ${courses}`);

//join method in arrays
let separator = courses.join('|'); // using separator to separate to separate elements with "|"
console.log(` separated elements ${separator}`);





//we create a list of strings with variable: vonvertor

//using variables to convert objects to string
let convertor = courses.toString(); 
console.log(`This array become a list of strings ${convertor}`);

//converting using function that only works in strings
let caps = convertor.toUpperCase();
console.log(`Testing if string can call uppercase ${caps}`);

let smalls = convertor.toLocaleLowerCase();
console.log(`Testing if string can be lowercase ${smalls}`);




//2D arrays
let student = {
    firstname: "Charlotte",
    surname: "Nkuna",
    stipend: 6000
}
console.log(delete student.stipend) //call the delete method or statement. it will say true if deleated
console.log(student); //it will print it with{ } because its an object
console.log(student.firstname, student.surname) //key method:abstracting to fetch whatever its in the object it print


