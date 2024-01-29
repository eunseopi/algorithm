const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split(" ");

const a = Number(input[0]);
let sum = 0;
for (let i = 1; i <= a; i++) {
    sum += i;
}
console.log(sum);