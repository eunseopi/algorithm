const fs = require("fs");
const input = fs.readFileSync('dev/stdin').toString().trim();

let n = input.toLowerCase();

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for(let char of str){
        if(charMap[char]){
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap){
        if(charMap[char] > max) {
            max = charMap[char];
            maxChar = char.toUpperCase(); // 대문자로 변환하여 저장
        } else if (charMap[char] === max) { // 가장 많이 사용된 알파벳이 여러 개인 경우
            maxChar = '?'; // 결과를 '?'로 설정
        }
    }
    return maxChar;
}

console.log(maxChar(n));
