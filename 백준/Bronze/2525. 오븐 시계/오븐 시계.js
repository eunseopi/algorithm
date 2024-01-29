const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let [hh,mm] = input[0].split(" ").map(Number);

const add = Number(input[1]);

mm += add;

if(mm >= 60){
    hh += Math.floor(mm / 60);
    mm %= 60;
}

if(hh >= 24) hh -= 24;

console.log(hh,mm);