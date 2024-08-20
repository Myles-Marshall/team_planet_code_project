const prompt = require('prompt-sync')();
const earthGravityFactors = require('./utils/earthGravityFactors.js');
const alienGravityFactors = require('./utils/alienGravityFactors.js');
function calculateUserFactors(factorType, factorMeasurement, userWeight, systemType) {
    let factors = {};
    if (factorType = "weight") {
        if (systemType = "1") {
            for (let planet in earthGravityFactors) {
                factors[planet] = parseFloat((userWeight * earthGravityFactors[planet]).toFixed(2));
            }
        } else if (systemType = "2") { 
            for (let planet in alienGravityFactors) {
                factors[planet] = parseFloat((userWeight * alienGravityFactors[planet]).toFixed(2));
            }
        }
    }
    else if (factorType = "jumps" || "pushups") { 
        if (systemType = "1") {
            for (let planet in earthGravityFactors) {
                factors[planet] = parseFloat((userWeight / earthGravityFactors[planet]).toFixed(2));
            }
        } else if (systemType = "2") {
            for (let planet in alienGravityFactors) {
                factors[planet] = parseFloat((userWeight / alienGravityFactors[planet]).toFixed(2));
            }
        }
    }
    if (systemType = "1") {
        systemType = earthGravityFactors;
    } else if (systemType = "2") {
        systemType = alienGravityFactors;
    }
    for (let planet in factors) {
        console.log(`Your ${factorType} on ${planet} is ${systemType[planet]}${factorMeasurement}`);
    }
    getUserInput();
}
function getUserInput() {
    let factorMeasurement = "reps";
    let input;
    console.log("Enter what you want to measure: weight, jumps or pushups");
    factorType = prompt('>>').trim().toLowerCase();
    switch (factorType) {
        case 'jumps':
            factorType = 'jumps'
            console.log("metric or imperial");
            factorSystem = prompt('>>').trim().toLowerCase();
            while (true) {
                input = prompt;
                if (input = "metric" || "imperial") {
                    break;
                } else {
                    console.error('not valid input')
                }
            }
            if (factorSystem = "metric") {
                factorMeasurement = "cm";
                console.log("how high can you jump in cm");
                userWeight = prompt('>>').trim().toLowerCase();
            } else if (factorSystem = "imperial") {
                factorMeasurement = "inches";
                console.log("how high can you jump in inches");
                userWeight = prompt('>>').trim().toLowerCase();
            }
            break;
        case 'weight':
            factorType = 'weight'
            console.log("metric or imperial");
            factorSystem = prompt('>>');
            while (true) {
                input = prompt;
                if (input = "metric" || "imperial") {
                    break;
                } else {
                    console.error('not valid input')
                }
            }
            if (factorSystem = "metric") {
                factorMeasurement = "kg";
                console.log("what is your weight in kg");
                userWeight = prompt('>>').trim().toLowerCase();
            } else if (factorSystem = "imperial") {
                factorMeasurement = "lb";
                console.log("what is your weight in lb");
                userWeight = prompt('>>').trim().toLowerCase();
            }
            break;
        case 'pushups':
            factorType = 'pushups'
            console.log("how many pushups can you do");
            userWeight = prompt('>>').trim().toLowerCase();
            break;
    }
    while (true) {
        input = prompt;
        if (input = "weight" || "jump" || "pushups") {
            break;
        } else {
            console.error('you are wrong')
        }
    }
    console.log("select 1 for our solar system or 2 for alien solar system");
    systemType = prompt('>>').trim().toLowerCase();
    calculateUserFactors(factorType, factorMeasurement, userWeight, systemType);
}

global.calculateUserFactors = calculateUserFactors;
global.getuserInput = getUserInput;
getUserInput();
calculateUserFactors();