const prompt = require('prompt-sync')()

let name = prompt("what is your name?: ")
// console.log(`my name is ${name}`);


let randGuess;
let guess = 0

// while (true) {

//     randNumber = Math.floor(Math.random() * (10 - 1 + 1) * 1)

//     randGuess = prompt("please guess a number: ")
//     guess++

//     if (isNaN(randGuess)) {
//         console.log("Please input a valid number");
//         break;
//     } else {
//         if (guess == 3) {
//             console.log("you have lost");
//             break;
//         } else {
//             if (parseInt(randGuess) > randNumber) {
//                 console.log(`Too High and number is ${randNumber} and you have guessed ${guess} times`);
//             } else if (parseInt(randGuess) < randNumber) {
//                 console.log(`Too Low and number is ${randNumber} and you have guessed ${guess} times`);
//             } else if (parseInt(randGuess) === randNumber) {
//                 console.log(`youre correct and number is ${randNumber}`);
//                 break;
//             }
//         }
//     }
// }

// console.log(parseFloat("20.02"))
// console.log(parseInt("20.82"))
let value = 20
console.log(typeof(value.toString()))


