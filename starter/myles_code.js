const prompt = require("prompt-sync")();
const gravityFactors = require('./gravityFactors.js');

function calculateUserFactors(factorType, value) {
    let results = {}
    let factor = `${factorType}`

    for (let key in gravityFactors) {
        results[key] = Math.round(value * gravityFactors[key] * 100) / 100;
    }

    switch (factor.toLowerCase()) {
        case "jump":
            console.log(`Your jump height is ${value} meters`);

            for (let key in results) {
                console.log(`Your jump height on ${key} is ${results[key]} meters`);
            }
            break;
        case "weight":
            console.log(`Your weight is ${value} kg`);

            for (let key in results) {
                console.log(`Your weight on ${key} is ${results[key]} kg`);
            }
            break;
    }
}

function getUserFactors() {
    console.log("Enter factor type (Jump or Weight):");
    const factor = prompt(">");

    switch (factor.toLowerCase()) {
        case "jump" || "weight":
            console.log("Enter numerical value:");
            const factorValue = prompt(">")

            if (/^\d+$/.test(factorValue)) {
                calculateUserFactors(factor, factorValue);
            } else {
                console.log("Not a number, retry");
            }
            break;
        default:
            console.log("Not a valid factor type");
            getUserFactors();
    }
}