// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();
// Import the gravityFactors module which contains factors for different planets
const gravityFactors = require('./gravityFactors.js');
// Define a function to show user factors based on input type and value
function calculateFactor(chosenFactor, unit) { 
    // Initialize an object to hold the results
    let results = {};
    // Declare a variable to hold the unit of measurement
    let measurement = unit;
    // Iterate over each item in the gravityFactors object
    for (let planet in gravityFactors) { 
        // Calculate the factor multiplied by the input value and round it to two decimals
        results[planet] = Math.round((chosenFactor * gravityFactors[planet]) * 100) / 100;
    }
    switch (measurement) { 
        case kg:
            console.log(`you are ${planet} kg's on ${results[planet]}`);
            break;
        case lb:
            console.log(`you are ${planet} lb's on ${results[planet]}`);
            break;
        case tons:
            console.log(`you are ${planet} tons on ${results[planet]}`);
            break;
    }
}        
    // Switch case to determine the measurement unit based on factor type
    // Iterate over the results and log each one

// Define a function to get user inputs for factor type and value
    // Prompt the user to enter the type of factor they want to calculate
    // Prompt the user to enter the numerical value of the factor
    // Call the showUserFactors function with the user inputs and the gravity factors
// Expose getUserFactors globally
