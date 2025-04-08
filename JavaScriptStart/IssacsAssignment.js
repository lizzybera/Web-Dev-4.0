const prompt = require("prompt-sync")()

//2.
const bmiCalc = () => {
    let markHeight = prompt("Input Mark's height:(m)")
    let markWeight = prompt("Input Mark's weight:(kg)")
    let johnHeight = prompt("Input John's height:(m)")
    let johnWeight = prompt("Input John's weight:(kg)")
    let markBmi = markWeight / (markHeight) ^ 2
    let johnBmi = johnHeight / (johnWeight) ^ 2


    if (markBmi > johnBmi) {
        console.log(`Marks BMI (${markBmi}) is higher than John's BMI (${johnBmi})`);
    } else if (markBmi < johnBmi) {
        console.log(`John's BMI (${johnBmi}) is higher than Marks BMI (${markBmi})`);

    }
}
// bmiCalc()

//1.
const tipCalc = () => {
    let billVar = prompt("Input your bill:")

    if (billVar > 50 && billVar < 300) {
        let tip = 15 / 100 * billVar
        let total = tip + parseInt(billVar)
        console.log(`the bill was ${billVar} and the tip was ${tip} as the total value ${total}`);
    } else {
        let tip = 20 / 100 * billVar
        let total = tip + parseInt(billVar)
        console.log(`the bill was ${billVar} and the tip was ${tip} as the total value ${total}`);
    }

}
// tipCalc()

const randQuotes = () => {
    let quotes = [
        `"The only way to do great work is to love what you do." – Steve Jobs`,
        `"Success is not the key to happiness. Happiness is the key to success." – Albert Schweitzer`,
        `"The future belongs to those who believe in the beauty of their dreams." – Eleanor Roosevelt`,
        `"Do not wait to strike till the iron is hot, but make it hot by striking." – William Butler Yeats`
    ]

    let el = Math.floor(Math.random() * quotes.length)
    return quotes[el]
}
// console.log(randQuotes());
const delay4rmSever = 3000
setInterval(()=>{
    console.log(" ");
    
    console.log(randQuotes());
}, delay4rmSever)
