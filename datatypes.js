//string
let petName = 'Mbazima'; // Global variable
pet()

function pet() {
    fruit = 'Banana'; // Considered global

    console.log(typeof petName + '- ' + 'My pet name is ' + petName)
}

console.log(typeof petName + '- ' + 'My pet name is ' + petName + ' fruit name is ' + fruit)



//integer or number
let number = 1234567890;
IdNumber()

function IdNumber() {
    console.log( typeof number + '- ' + 'Id number is: ' + number);
}

//Boolean
let available = true;
let notAvailable = false;
snacks()

function snacks() {
    console.log(typeof available + '- ' + 'The snacks are available: ' + available + ' sancks are finished: ' + notAvailable);
}


//double or Decimal
let num = 29.55;
age()

function age() {
    nextNum = 30.05;

    console.log(typeof num + '- ' + 'I am currently: ' + num + ' Next year I will be: ' + nextNum );
}


//float
let floatnum = 29.5572678493;
numbers()

function numbers() {
    next = 30.055789032;

    console.log(typeof floatnum + '- ' + 'The number is ' + floatnum + ' Next number will be ' + next );
}


//Character/ char
let id = Symbol("id");
intitals()

function intitals() {
    console.log(typeof id + "- @ ");
}


//long
let bigNum = 1234567890123456789012345678901234567890;
BigNumber()

function BigNumber() {
    console.log(typeof bigNum + '- ' + 'The big number is ' + bigNum)
 
}
