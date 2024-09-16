// Read two floating points' values of double precision A and B, corresponding to two student's grades. After this, calculate the student's average, considering that grade A has weight 3.5 and B has weight 7.5. Each grade can be from zero to ten, always with one digit after the decimal point. Don’t forget to print the end of line after the result, otherwise you will receive “Presentation Error”. Don’t forget the space before and after the equal sign.

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split("\n");


var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);

var weightA = 3.5;
var weightB = 7.5;

var avg = ((Number(A)*weightA) + (Number(B)*weightB))/ (weightA+weightB);

console.log(`MEDIA = ${avg.toFixed(5)}`)

