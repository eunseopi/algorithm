const fs = require('fs');
const input = fs.readFileSync(0,'utf8').toString().split(" ");

let Dice = [parseInt(input[0]),parseInt(input[1]),parseInt(input[2])];
Dice.sort();

let a = Dice[0];
let b = Dice[1];
let c = Dice[2];

if(a === b && b === c){
    result = 10000 + a * 1000
    console.log(result);
} else if(a === b || b === c){
    if(a===b){
        console.log(1000+a*100);
    } else if(b===c){
        console.log(1000+b*100);
    }
} else if(a !== b && b !== c){
    console.log(c*100);
}