// Read three values (variables A, B and C), which are the three student's grades. Then, calculate the average, considering that grade A has weight 2, grade B has weight 3 and the grade C has weight 5. Consider that each grade can go from 0 to 10.0, always with one decimal place.

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split("\n");

var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);
var C = parseFloat(lines[2]);

var weightA = 2;
var weightB = 3;
var weightC = 5;

var avg = (A*weightA + B*weightB + C*weightC)/(weightA+weightB+weightC);

console.log(`MEDIA = ${avg.toFixed(1)}`);