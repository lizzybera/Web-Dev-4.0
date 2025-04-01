// console.log("Hello");

let person = {
    name: "Haleemah",
    age: 33
} //object 
// assess objects
// person.name
// person["name"]

// person.name = "Isaac"

let person2 = [33, "Haleemah"] //array

// for in
// for (const key in person) {
//     console.log(key, person[key]);
// }

// for (const index in person2){
//     console.log(index, person2[index]);
// }


// for loop
// for (let i = 1; i < 10; i++) {

// }

let name2 = "Hello"

// for of, array and string
// for (const index of name2){
//     console.log(typeof(index));
// }

// class 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting(){
        return `hello ${this.name}`
    }

    age2(){
        return `${this.name} is ${this.age} years old`
    }

    get props() {
        return `${this.name}, ${this.age}`
    }

    set props(newName){
        this.name = newName

        return this.name
    }
}

const IsaacPerson = new Person("Issac", 20)
const RhemaPerson = new Person("Rhema", 51)
// console.log(IsaacPerson.greeting());
// console.log(IsaacPerson.age2());

// console.log(RhemaPerson.age2());

// console.log(RhemaPerson.props);
// console.log(RhemaPerson.props("Sam"));
// console.log(RhemaPerson.props);

IsaacPerson.name = "Sam"

// console.log(IsaacPerson.name);
console.log(IsaacPerson.greeting());






class Calculator {
    constructor (a , b) {
        this.a = a;
        this.b = b;
    }

     add = (a, b) => {
        let addition = a + b;
        console.log(addition);
    }
    
     sub = () => {
        let subtration = this.a - this.b;
        console.log(subtration);
    }
    
     multiplication = () => {
        let multiply = this.a * this.b;
        console.log(multiply);
        // return multiply
    }
    
     division = () => {
        let divide = this.a / this.b;
        console.log(divide);
    }
    
     mudulos = () => {
        let reminder = this.a % this.b;
        console.log(reminder);
    }
}

const lizCalc = new Calculator()
// console.log(lizCalc.division());
// lizCalc.add(20,30);
