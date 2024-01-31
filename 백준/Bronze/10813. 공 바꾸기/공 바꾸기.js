const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].trim().split(" ").map(x => parseInt(x));
const arr = [];
for(let i = 0; i < N; i++){
    arr.push(i+1);
}

for(let j = 0; j < M; j++){
    let[before,after] = input[j+1].split(" ").map(x => parseInt(x));
    let tmp = arr[before - 1];
    arr[before - 1] = arr[after - 1];
    arr[after - 1] = tmp;
}

console.log(arr.join(" "));