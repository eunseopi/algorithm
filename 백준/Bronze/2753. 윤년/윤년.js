let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let number = Number(input[0]);

if(number % 4 === 0 && (number % 100 !== 0 || number % 400 === 0)){
    console.log(1);
}else{
    console.log(0);
}