const prompt = require("prompt-sync")();
const earthGravityFactors = require('./utils/earthGravityFactors.js');
const alienGravityFactors = require('./utils/alienGravityFactors.js');

function calculateUserFactors(factorType, factorSystem, factorValue, factorPlanets) {
    let results = {};
    let factorName = "weight";
    let measurement = "repetitions";

    let measurementTypes = {
        "1": [undefined, "cm", "inches"],
        "2": [undefined, "kg", "lbs"],
    }

    for (let planet in factorPlanets) {
        if (factorType === "2") {
            results[planet] = parseFloat((factorValue * factorPlanets[planet]).toFixed(2))
        } else {
            factorType == 3 ? factorName = "pushups" : factorName = "jump";
            results[planet] = parseFloat((factorValue / factorPlanets[planet]).toFixed(2))
        }
    }

    if (factorName !== "pushups") {
        measurement = measurementTypes[factorType][factorSystem];
    }

    for (let key in results) {
        console.log(`Your ${factorName} on ${key} is ${results[key]} ${measurement}`)
    }
}

function getUserFactors() {
    let factorType;
    let factorSystem;
    let factorValue;
    let factorPlanets;

    while (true) {
        console.log("Enter a number for factor type (1 for Jump, 2 for Weight, 3 for Pushups):")
        factorType = prompt("> ").trim();

        if (factorType == 1 || factorType == 2 || factorType == 3 && !isNaN(factorType)) {
            break;
        } else {
            console.error("Invalid factor type, retry.");
        }
    }

    if (factorType !== "3") {
        while (true) {
            console.log("Enter a number for measurement system (1 for Metric, 2 for Imperial):")
            factorSystem = prompt("> ").trim()

            if (factorSystem == 1 || factorSystem == 2 && !isNaN(factorType)) {
                break;
            } else {
                console.error("Invalid measurement system, retry.");
            }
        }
    }

    while (true) {
        console.log("Enter a number value:")
        factorValue = prompt("> ").trim()

        if (!isNaN(factorValue)) {
            break;
        } else {
            console.error("Not a number, retry.");
        }
    }

    while (true) {
        console.log("Enter a number for solar system (1 for Earth Solar System, 2 for Alien):")
        factorPlanets = prompt("> ").trim()

        if (factorPlanets == 1 && !isNaN(factorPlanets)) {
            factorPlanets = earthGravityFactors;
            break;
        } else if (factorPlanets == 2 & !isNaN(factorPlanets)) {
            factorPlanets = alienGravityFactors;
            break;
        } else {
            console.error("Invalid input for solar system, retry.");
        }
    }

    calculateUserFactors(factorType, factorSystem, factorValue, factorPlanets)
}

global.getUserFactors = getUserFactors;