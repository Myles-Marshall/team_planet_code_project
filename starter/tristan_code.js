// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();
// Import the gravityFactors module which contains factors for different planets
const gravityFactors = require('./utils/earthGravityFactors.js');
// Define a function to show user factors based on input type and value
function calculateUserFactors(factorType, factorUnit) { 
    // Initialize an object to hold the results
    let factors = {};
    // Declare a variable to hold the unit of measurement
    let measurement;
    // Iterate over each item in the gravityFactors object
    for (let planet in gravityFactors) { 
        // Calculate the factor multiplied by the input value and round it to two decimals
        factors[planet] = parseFloat((factorType * gravityFactors[planet]).toFixed(2));
    }
    switch (factorType) { 
        case 'jump':
            measurement = 'cm';
            break;
        case 'weight':
            measurement = 'kg';
            break;
        default:
            measurement = 'units';
    }
        // Iterate over the results and log each one
    for (let planet in factors) { 
        console.log(`Your ${factorType} on ${planet} is ${factors[planet]}${measurement}`);

    }

}        

// Define a function to get user inputs for factor type and value
function getUserInput() { 
    console.log("Enter what you want to measure (plz do 'weight' or 'jump')");
    const factorType = prompt('>>');
    console.log("Enter what you ()");
    const FactorUnit = prompt('>>');
    showUserFactors(someparam, someparam2);

}
    // Prompt the user to enter the type of factor they want to calculate
    // Prompt the user to enter the numerical value of the factor
    // Call the showUserFactors function with the user inputs and the gravity factors


// Expose getUserFactors globally
global.calculateUserFactors = calculateUserFactors;
global.getuserInput = getUserInput;