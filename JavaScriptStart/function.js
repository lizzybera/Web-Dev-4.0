// first syntax
function hello(name){
    if (name === "James") {
        console.log(`hi ${name}`); 
    }else{
        console.log(`hello ${name}`); 

    }
}

// second syntax
// () => {}
const Hello2 = (name2) => {
        console.log(`hello ${name2}`);     
}

const prompt = require("prompt-sync")()

const HelloPrompt = () => {
    let nameVar = prompt("input name please: ")
        console.log(`hello ${nameVar}`);     
}

HelloPrompt()

// let nameVar = prompt("input name please: ")

// hello(nameVar)
// hello("Samuel")
// hello("James")
// Hello2("James the second")

const add = (a, b) => {
    let addition = a + b;
    console.log(addition);
}

const sub = (a, b) => {
    let subtration = a - b;
    console.log(subtration);
}

const multiplication = (a, b) => {
    let multiply = a * b;
    console.log(multiply);
}

const division = (a, b) => {
    let divide = a / b;
    console.log(divide);
}

const mudulos = (a, b) => {
    let reminder = a % b;
    console.log(reminder);
}

// add(12, 6)
// sub(20, 10)
// multiplication(10, 2)
// division(20, 2)
// mudulos(5, 2)


// age calculator
const ageCalc = (year, month, day) => {
    let date = new Date;
   let presentyear = date.getFullYear();
   let presentMonth = date.getMonth() + 1;
   let presentDay = date.getDate();
//    console.log(presentMonth, "presentMonth");
//    console.log(presentDay, "presentDay");

    age = presentyear - year;

    if (presentMonth < month || (presentMonth === month && presentDay < day)){
        age--
    }

    console.log(`you are ${age} years old`);
}

// ageCalc(2020, 3 , 30)