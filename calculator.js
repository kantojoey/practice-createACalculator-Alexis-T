//Coded calculator with Arnela

// Scenario: You are building a calculator for an online math game. The
// calculator must include functionality to perform the following:

const calculator = {
// ● Absolute Value Calculation: Given any number, return its absolute
// value.
    absValue: function(num) {
        return Math.abs(num);
    },
// ● Power Calculation: Calculate and return the value of a base raised to
// a specific power.
    baseToAPower: function(base, exponent) {
        return Math.pow(base, exponent);
    },
//Square Root Finder: Calculate the square root of a number.
    squareRoot: function(num) {
        return Math.sqrt(num);
    },
// ● Maximum and Minimum Finder: From a given set of numbers,
// determine the largest and smallest values.
    maxMinValues: function(numbers) {
        console.log(Math.max(...numbers));
        console.log(Math.min(...numbers));
    },
// ● Random Number Generator: Generate a random integer within a
// specified range.
    randomNumber: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
// ● Custom Rounding: Round a number to a specified number of decimal
// places.
    customRounding: function(num, decimal) {
        const factor = Math.pow(10, decimal);
        return Math.round(num * factor) / factor;
    }
};
console.log(calculator.absValue(-45.67)); //Outputs 45.67
console.log(calculator.baseToAPower(5, 3)); //Outputs 125
console.log(calculator.squareRoot(144)); //Outputs 12
calculator.maxMinValues([3, 78, -12, 0.5, 27]); //Outputs 78 as max and -12 as min
console.log(calculator.randomNumber(1, 50)); //Outputs random number in [1, 50]
console.log(calculator.customRounding(23.67891, 2)); //Outputs 23.68
