// Read four integer values named A, B, C and D. Calculate and print the difference of product A and B by the product of C and D (A * B - C * D).

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split("\n");

let A = parseInt(lines[0]);
let B = parseInt(lines[1]);
let C = parseInt(lines[2]);
let D = parseInt(lines[3]);

let SumAB = A * B;
let SumCD = C * D;

let difference = SumAB - SumCD;

console.log(`DIFERENCA = ${difference}`);
