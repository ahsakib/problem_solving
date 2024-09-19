// Write a program that reads an employee's number, his/her worked hours number in a month and the amount he received per hour. Print the employee's number and salary that he/she will receive at end of the month, with two decimal places.

// Don’t forget to print the line's end after the result, otherwise you will receive “Presentation Error”.
// Don’t forget the space before and after the equal signal and after the U$.

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split("\n");

let number = lines[0];
let hours = lines[1];
let amount = lines[2];

let receivedMoney = hours*amount;

console.log(`NUMBER = ${number}`);
console.log(`SALARY = U$ ${receivedMoney.toFixed(2)}`);