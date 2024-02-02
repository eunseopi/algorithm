const fs = require("fs");
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const a = Number(input[0]);
const arr = [...input[1]].map(Number);
let sum = 0;

for(let i = 0; i<a; i++){
    sum += arr[i];    
}

console.log(sum);