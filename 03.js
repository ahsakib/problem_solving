// The formula to calculate the area of a circumference is defined as A = π . R2. Considering to this problem that π = 3.14159:

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');

let R = parseFloat(lines[0]);
const π = 3.14159;

let A = π * Math.pow(R,2);

console.log(`A=${A.toFixed(4)}`);