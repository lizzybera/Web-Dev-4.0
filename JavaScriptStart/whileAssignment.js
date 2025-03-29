const prompt = require("prompt-sync")()

let userBalance = 500;
let pin = 1234;

while (true) {
    let decision = prompt("Do you want to continue or exit")

    if (isNaN(decision)) {
        if (decision.toLowerCase() === "exit") {
            break;
        } else if (decision.toLowerCase() === "continue") {
            let userPin = prompt("Please input your pin")
            if (isNaN(userPin)) {
                console.log("Please input a valid pin");
            } else {
                if (parseInt(userPin) === pin) {
                    let withdrawal = prompt("input amount to be withdrawn")

                    if (isNaN(withdrawal)) {
                        console.log("please input a valid number");
                        break;
                    } else {
                        if (withdrawal <= 0) {
                            console.log("Invalid amount entered");
                            break;
                        } else {
                            if (withdrawal > userBalance) {
                                console.log("insuficient balance");

                                break;
                            } else {
                                if (userBalance <= 0) {
                                    console.log("you have run out of funds");
                                    break
                                } else {
                                    userBalance -= withdrawal

                                    console.log(`Your balance is now ${userBalance}`);
                                    // break
                                }
                            }
                        }
                    }
                } else {
                    console.log("invalid pin");
                    break;
                }
            }
        } else {
            console.log("please choose a valid option");
        }
    } else {
        console.log("Please input a text");
        break
    }
}