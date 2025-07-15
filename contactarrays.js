//concatenate: its used to combine or join 2 or more arrays into one srray
let into = ["Havascript", "HTML", "CSS"];
let basics = ["Problem solving", "Coding", "Git"];
let fuundamentals = ["Algorhythms", "Functions", "Logics"];
let cs = into.concat(basics, fuundamentals);

console.log(cs);

//flat method: for reducing nesting inside an array. also called flatten the array
let courses = [["Html", "Css", "Javascript", "React"], 
["Problem solving", "Coding", "Git"],
["Algorhythms", "Functions", "Logics"] 
];
//console.log(courses);

let subjects = courses.flat(Infinity);
console.log(subjects);
