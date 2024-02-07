const fs = require("fs");
const input = fs.readFileSync('dev/stdin').toString().trim();

const revInput = input.split("").reverse().join("");

if(input === revInput){
    console.log(1);
} else {
    console.log(0);
}