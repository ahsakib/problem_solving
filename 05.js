// Read two integer values. After this, calculate the product between them and store the result in a variable named PROD. Print the result like the example below. Do not forget to print the end of line after the result, otherwise you will receive “Presentation Error”.

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split("\n");

var A = parseInt(lines[0]);
var B = parseInt(lines[1]);

var PROD = A*B;

console.log(`PROD = ${PROD}`);