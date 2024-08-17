const prompt = require('prompt-sync')();
const gravityFactors = require('./utils/earthGravityFactors.js');
function calculateUserFactors(factorType, factorSystem, factorValue, factorPlanets) {
    let factors = {};
    let factorMeasurement;
    for (let planet in gravityFactors) {
        factors[planet] = parseFloat((factorType * gravityFactors[planet]).toFixed(2));
    }
    for (let planet in factors) {
        console.log(`Your ${factorType} on ${planet} is ${factors[planet]}${factorMeasurement}`);
    }
}

function getUserInput() {
    console.log("Enter what you want to measure (plz do 'weight' or 'jump')");
    let factorType = prompt('>>').trim().toLowerCase();
    switch (factorType) {
        case 'jump':
            console.log("metric or imperial");
            factorMeasurement = prompt('>>').trim().toLowerCase();
            while (true) {
                const input = prompt
                if (input = "metric" || "imperial") {
                    break;
                } else {
                    console.error('not valid input')
                }
            }
            if (factorMeasurement = "metric") {
                factorMeasurement = "cm";
            } else {
                factorMeasurement = "inches";
            }
            break;
        case 'weight':
            console.log("metric or imperial");
            factorMeasurement = prompt('>>');
            while (true) {
                const input = prompt
                if (input = "metric" || "imperial") {
                    break;
                } else {
                    console.error('not valid input')
                }
            }
            if (factorMeasurement = "metric") {
                factorMeasurement = "kg";
            } else {
                factorMeasurement = "lb";
            }
            break;
        case 'pushups':
            factorMeasurement = 'repetitions';
            break;
        default:
            factorMeasurement = 'units';
    }
    while (true) {
        const input = prompt
        if (input = "weight" || "jump" || "pushups") {
            break;
        } else {
            console.error('you are wrong')
        }
    }
}

global.calculateUserFactors = calculateUserFactors;
global.getuserInput = getUserInput;