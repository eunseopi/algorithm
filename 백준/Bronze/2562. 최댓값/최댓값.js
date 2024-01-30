const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

const maxValue = Math.max(...input);
const index = input.indexOf(maxValue);

console.log(maxValue);
console.log(index + 1);