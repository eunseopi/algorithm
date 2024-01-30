const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input[1].split(' ').map(Number);
let maxValue = Math.max(...arr);
let minValue = Math.min(...arr);

console.log(`${minValue} ${maxValue}`);