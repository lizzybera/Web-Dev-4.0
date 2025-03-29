// console.log(Math.round(300.01));
// console.log(Math.ceil(300.00));
// console.log(Math.floor(300.71));
// console.log(Math.sqrt(4));
// console.log(Math.pow(3,2));

// console.log(Math.random() * 10);
// console.log(Math.floor(Math.random() * 10)); //0 to 9

// Math.floor(Math.random() * (max - min) + min)
// console.log(Math.floor(Math.random() * (30 - 29) + 29)); //20 to 29

// Math.floor(Math.random() * (max - min + 1) + min)
// console.log(Math.floor(Math.random() * (30 - 29 + 1) + 29));

// for loop
// for (i, c , o) {
//     code
// }

// for (let count = 10; count <= 10; count++){
//     console.log(`count ${count}`);
// }

let i = 1

while (i <= 10) {
    // if (i === 5) {
        //     break;
        // }
        c = i++
        if (c === 5){
            continue;
        }

        console.log(`count ${c}`);
        // i++
}