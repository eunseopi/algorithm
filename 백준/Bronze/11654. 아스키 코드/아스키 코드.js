const fs = require("fs");
const input = fs.readFileSync('dev/stdin').toString().split('');

const charA = input[0];

console.log(charA.charCodeAt(0));