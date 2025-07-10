//first method
let globalVar = "This is a global variable";


function myVars() {
    let localVar = "This is a local variable"

console.log(localVar + 
    ", is only accessible inside a method or "
    + "a function");
}

console.log(globalVar + ", it is accessible everywhere") // can either take it inside the function or not

myVars(); //call the function

//2nd methode use return statement
let globalVa = "This is a global variable";


function myVars() {
    let localVa = "This is a local variable"
    return localVa;
}

console.log(globalVa + ", it is accessible everywhere")
console.log(myVars() + 
    ", while is only accessible inside a method or "
    + "a function");



