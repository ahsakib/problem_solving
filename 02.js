// Read 2 variables, named A and B and make the sum of these two variables, assigning its result to the variable X. Print X as shown below. Print endline after the result otherwise you will get “Presentation Error”.

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines[0]);
let B = parseInt(lines[1]);

console.log(`X = ${A+B}`);