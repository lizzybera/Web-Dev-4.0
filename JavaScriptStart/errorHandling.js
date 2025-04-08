"use strict"

// syntax error
// console.log("hello);

try {
    // all codes go here

    // syntax error
    // console.log("Hello world);

    // typeError
    // let number = 5;
    // console.log(number.toUpperCase());

    // reference error
    let varDeclaration;
    // console.log(varDeclaration);


} catch (err) {
    console.log(err.name);
    console.log(err.message);
    // console.log(err.stack);
    throw err

} finally {
    console.log("Sorry your code crashed");
}


// let number = 5;
//     console.log(number.toUpperCase());
// synchronous code
// console.log("my name is Rhema"); //2hrs
// console.log("hello");

// asynchrounous
const cooking = () => {
    // setTimeout(() => {
    //     console.log("beans is ready!!");
    //     // return `beans is ready`
    // }, 5000); //to put delay on a code

    setInterval(() => {
        console.log(`still cooking beans`);

    }, 1000)
}

// console.log("tea"); //first
// cooking(); //third 2hrs
// console.log("indomie"); //second //10mins