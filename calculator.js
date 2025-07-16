"use strict";

// Step 01: Create Functions for Addition, Subtraction, Multiplication, and Division
const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) =>  num1 * num2;

const divide = (num1, num2) => {
    if (num2 === 0) {
        return "Cannot divide by zero";
    }
    return num1/num2;
};

// Step 02: Create a Validation Function for Inputs
function validateInputs(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "Both inputs must be numbers";
    } else {
        return null;
    }
};

// Step 03: Create a Calculator Function to Combine the Above Functions
function calculator(num1, num2, operation) {
    validateInputs(num1, num2);
    switch (operation) {
        case 'add':
            return `Add result : ${add(num1, num2)}`;
        case 'subtract':
            return `Subtract result : ${subtract(num1, num2)}`;
        case 'multiply':
            return `Multiply result : ${multiply(num1, num2)}`;
        case 'divide':
            return `Divide result : ${divide(num1, num2)}`;
        default:
            return "Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'"
    }
};

// Example test case
console.log(calculator(20, 15, 'add')); // returns Add result : 35
console.log(calculator(20, 15, 'subtract')); // returns Subtract result : 5
console.log(calculator(20, 15, 'multiply')); // returns Multiply result : 300
console.log(calculator(20, 10, "divide")); // returns Divide result : 2
console.log(calculator(20, 0, "divide")); // returns Divide result : Cannot divide by zero
console.log(calculator(20, 15, "unknown")); // returns 'Invalid operation. Please use "add", "subtract", "multiply", or "divide".'
