// Read two integer values, in this case, the variables A and B. After this, calculate the sum between them and assign it to the variable SOMA. Write the value of this variable.

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');


var A = parseInt(lines[0]);
var B = parseInt(lines[1]);

var SOMA = A+B;

console.log(`SOMA = ${A+B}`);
