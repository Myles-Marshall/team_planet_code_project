const prompt = require("prompt-sync")();
const earthGravityFactors = require('./utils/earthGravityFactors.js');
const alienGravityFactors = require('./utils/alienGravityFactors.js');

function calculateUserFactors(factorType, factorSystem, measurement, factorValue, factorPlanets) {
    let results = {};

    switch (factorType) {
        case "jump":
            for (let planet in factorPlanets) {
                results[planet] = parseFloat((factorValue / factorPlanets[planet]).toFixed(2));
            }
            break;
        case "weight":
            for (let planet in factorPlanets) {
                results[planet] = parseFloat((factorValue * factorPlanets[planet]).toFixed(2));
            }
            break;
    }

    for (let key in results) {
        console.log(`Your ${factorType} on ${key} is ${results[key]} ${measurement}`);
    }
}

function calculateUserFactors2(factorType, factorSystem, factorValue, factorPlanets) {
    let results = {};
    let factorName;

    switch (factorType) {
        case "1":
            factorName = "jump";
            for (let planet in factorPlanets) {
                results[planet] = parseFloat((factorValue / factorPlanets[planet]).toFixed(2))
            }
            break;
        default: 
            factorName = "weight"
            for (let planet in factorPlanets) {
                results[planet] = parseFloat((factorValue * factorPlanets[planet]).toFixed(2))
            }
    }

    let measurementTypes = {
        "1": [undefined, "cm", "inches"],
        "2": [undefined, "kg", "lbs"],
    }

    for (let key in results) {
        console.log(`Your ${factorName} on ${key} is ${results[key]} ${measurementTypes[factorType][factorSystem]}`)
    }
}

function getUserFactors() {
    let factorType;
    let factorSystem;
    let measurement;
    let factorValue;
    let factorPlanets;

    while (true) {
        console.log("Enter factor type (Jump or Weight):");
        factorType = prompt("> ").trim();

        if (factorType === "jump" || factorType === "weight") {
            break;
    } else {
            console.error("Invalid factor type, retry");
        }
    }

    while (true) {
        console.log("Enter measurement system (Metric or Imperial):")
        factorSystem = prompt("> ").trim();

        if (factorSystem === "metric" || factorSystem === "imperial") {
            if (factorType === "jump") {
                if (factorSystem === "metric") {
                    measurement = "cm"
                } else if (factorSystem === "imperial") {
                    measurement = "inches"
                }
            } else if (factorType === "weight") {
                if (factorSystem === "metric") {
                    measurement = "kg"
                } else if (factorSystem === "imperial") {
                    measurement = "lbs"
                }
            }
            break;
        } else {
            console.error("Invalid factor type, retry");
        }
    }

    while (true) {
        console.log(`Enter factor value in ${measurement}:`);
        factorValue = prompt("> ").trim();

        if (!isNaN(factorValue)) {
            break;
        } else {
            console.error("Value entered is not a number, retry");
        }
    }

    while (true) {
        console.log("Enter solar system (1 for Earth Solar System, 2 for Alien Solar System):");
        factorPlanets = prompt("> ").trim();

        if (!isNaN(factorPlanets)) {
            if (parseInt(factorPlanets) === 1) {
                calculateUserFactors(factorType, factorSystem, measurement, factorValue, earthGravityFactors);
                break;
            } else if (parseInt(factorPlanets) === 2) {
                calculateUserFactors(factorType, factorSystem, measurement, factorValue, alienGravityFactors);
                break;
            } else {
                console.error("Not a valid choice, retry");
            }
        }
    }
}

global.getUserFactors = getUserFactors;


function getUserFactors2() {
    let factorType;
    let factorSystem;
    let measurement;
    let factorValue;
    let factorPlanets;

    while (true) {
        console.log("Enter a number for factor type (1 for Jump, 2 for Weight):")
        factorType = prompt("> ")

        if (factorType > 1 || factorType < 2 && !isNaN(factorType)) {
            break;
        }
    }

    while (true) {
        console.log("Enter a number for measurement system (1 for Metric, 2 for Imperial):")
        factorSystem = prompt("> ")

        if (factorSystem > 1 || factorSystem < 2 && !isNaN(factorSystem)) {
            break;
        }
    }

    while (true) {
        console.log("Enter a number value:")
        factorValue = prompt("> ")

        if (!isNaN(factorValue)) {
            break;
        }
    }

    while (true) {
        console.log("Enter a number for solar system (1 for Earth Solar System, 2 for Alien):")
        factorPlanets = prompt("> ")

        if (factorPlanets > 1 && !isNaN(factorPlanets)) {
            factorPlanets = alienGravityFactors;
            break;
        } else if (factorPlanets < 2 & !isNaN(factorPlanets)) {
            factorPlanets = earthGravityFactors;
            break;
        }
    }

    calculateUserFactors2(factorType, factorSystem, factorValue, factorPlanets)
}

global.getUserFactors2 = getUserFactors2;