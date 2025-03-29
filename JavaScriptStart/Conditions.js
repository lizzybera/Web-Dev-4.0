const prompt = require("prompt-sync")()
console.log("This is Conditional Statements");
console.log("");
let age = 7;

// if (age >= 30) {
//     console.log("age is correct"); //true
// } else {
//     console.log("The age is inCorrect"); //false
// }

let password = "isaac"
let email = "isaac404@gmail.com"

let loginPagePassword = "isaac"
let loginPageEmail = "isaac4045555@gmail.com"

// if (email === loginPageEmail) {
//     console.log("email correct");

//     if (password === loginPagePassword) {

//         console.log(`Welcome ${password}`);

//     } else {
//         console.log("password incorrect");

//     }

// } else {
//     console.log("email not found");

// }

// if (age >= 5 && age <= 10) {
//     console.log("not even close");

// } else if (age === 19) {
//     console.log("a bit close");

// } else if (age === 20) {
//     console.log("wow!!! you got it");

// } else {
//     console.log("Please dont guess again");
// }

// console.log("");
// console.log("Switch");
// console.log("");

// switch (age) {
//     case 20: console.log("The age is correct");
//     break;

//     case 21: console.log("a bit close");
//     break;

//     default: console.log("Please stop guessing");
//     break;
// }

let name2 = "liz"

nameCheck = name2 === "Rhema" ? `yes my name is ${name2}` : `No my name isnt ${name2}`;

// console.log(nameCheck);

// ATM System
let userBalance = 500
// let amountToWithdraw;

// if (amountToWithdraw <= 0) {
//     console.log("Invalid amount entered");
// } else {
//     if (amountToWithdraw <= userBalance) {
//         userBalance -= amountToWithdraw

//         console.log(`Withdrawal successfull and new balance is ${userBalance}`);

//     } else {
//         console.log(`Insufficient funds`);
//     }
// }

// increment q++ = q + 1
let q = 23
let postIncrement = q++  //make use of q then increae it  23, 24
let preIncrement = ++q //increase and make use of it

q-- //post decrement make use of the q b4 reducing
--q //pre decrement reduces b4 making of
// console.log(q, increment2);

let clear = prompt("input clear please")
let userPurpose = prompt(`choose "widthdrawal" or "deposit"`).toLowerCase()

if (userPurpose == "deposit"){
    console.log("65")
}else if (userPurpose == "withdrwal"){
    console.log("40")
}else {
    console.log("Please choose a valid option");
    // break;
}

if (clear == 65) {
    console.log("Weldone");
}else{
let math = clear * 20
    if (math == 20) {
        console.log("Yeaaaa its 20");
    } else {
        console.log("try again");
    }
}