// console.log("This is Array");

let issacCar = {
    name: "corola",
    model: "5",
    color: "blue"
}

let rhemsCar = {
    name: "camry",
    model: "400",
    color: "black"
}

// console.log(typeof(rhemsCar));
// console.log(issacCar.model);
// console.log(rhemsCar.model);

rhemsCar.noOfSeats = 4
delete rhemsCar.model

// console.log(rhemsCar);
// console.log(issacCar["name"]);

let arrayData = [rhemsCar, issacCar, 25, 40, "my name is liz", ["another array", 2, ["22", 30]]]

// console.log(arrayData[0], "array access");
// console.log(arrayData.length, "array length");
// console.log(arrayData[5][2][1]);
// console.log(arrayData[0].color);
// console.log(typeof(arrayData));
// console.log(typeof(arrayData.toString()));
// console.log(arrayData.concat([22, "concat"]).concat([22, 45]));
// console.log(arrayData.join(" "));
// console.log(arrayData.reverse());
// console.log(arrayData.slice(0, 2));
// let newArrayData = arrayData.splice(0, 2); //delete
// let deleteRhemsCar = arrayData.splice(0, 1) //delete 
// let addItem = arrayData.splice(0, 0, "splice addition") // add
// let replaceItems = arrayData.splice(0, 1, "This is a replacement for rhems car") //replace

// console.log(arrayData);

// console.log(arrayData.fill("⭐⭐⭐", 2, 4));

// console.log(arrayData.flat(2));

// let pushArray = arrayData.push("push object")
// console.log(arrayData);
// console.log("");
// let popArray = arrayData.pop("pop object")
// console.log(popArray);
// console.log(arrayData);

// let unshiftArray = arrayData.unshift("unshift object")
// console.log(arrayData);
// console.log("");
// console.log("");
// console.log("");
// let shiftArray = arrayData.shift("shift object")
// console.log(shiftArray);
// console.log(arrayData);

// () => {} // syntax

// const func = () => {

// }

let simpleArray = [20, 40, 30, 60, 5]
// let alphaSort = ["a", "b", "q", "e"]

// let sorting = simpleArray.sort((a, b) => {
//     return b - a
// })

// console.log(sorting, "sort");

// let mapping = simpleArray.map((el) => {
//     return el
// })

// console.log(mapping, "mapping");

// simpleArray.forEach((el) => {
//     // return el
//     console.log(el);
// })

// let filtering = simpleArray.filter((el) => {
//     return el < 20
// }) //take out a part based on condition

// let filteringDelete = simpleArray.filter((el) => {
//     return el !== 20
// }) // delete based on condition


// console.log(filteringDelete, "filter");

let reducing = simpleArray.reduce((a, b) => {
    return a + b
}, 200)

// 0 + 20 = a
// 20 + 40 = a
// 60 + 30 = a

// console.log(reducing, "reducing");

const cart = [
    {
        product: "brush",
        amount: 200
    },
    {
        product: "laptop",
        amount: 100
    },
    {
        product: "mouse",
        amount: 300
    },
]

// let total = cart.filter((el) => {
//     return el.amount > 100
// }).map((el) => {
//     return el.amount
// }).reduce((a, b) => {
//     return a + b
// }, 0)


// cart.map((el) => {
//     console.log(el.amount);
// })

// console.log(total);

// let someCheck = cart.map((el) => {
//     return el.amount
// }).some((el) => {
//     return el >= 300
// })
// console.log(someCheck);

// let everyCheck = cart.map((el) => {
//     return el.amount
// }).every((el) => {
//     return el >= 300
// })
// console.log(everyCheck);

// user buys brush, 10% off all they buy

// let findingPromo = cart.find((el) => {
//     return el.product === "brushed"
// })

// let findingPromo = cart.findIndex((el) => {
//     return el.product === "brush"
// })

// console.log(findingPromo);

// console.log(Math.max(20, 50, 30));
// console.log(Math.min(20, 50, 30));
// console.log(Math.min(...simpleArray));

let spread = {...cart}

// console.log(spread, );

const date = new Date()

// console.log(date.getFullYear(), "date");
// console.log(date.getDay(), "date");
// console.log(date.get(), "date");
