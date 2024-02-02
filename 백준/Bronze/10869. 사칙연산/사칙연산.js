//첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let A = parseInt(input[0]);
let B = parseInt(input[1]);

console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(Math.floor(A/B));
console.log(A%B);

