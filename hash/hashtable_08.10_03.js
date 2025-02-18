function hashTable_08_03(str) {
    // 모든 알파벳 문자를 넣어둔 문자열을
    // 해시 테이블로 바꾼다음
    // str 이랑 비교해서 없는거 찾으면 되는거 아닌가..?

    let newStr = "abcdefghijklmnopqrstuvwxyz"
    let resultStr = str.replace(/ /gi, "");
    let hashTable = {};

    for (const item of resultStr) {
        hashTable[item] = true;
    }

    for (const item of newStr) {
        if(!hashTable[item]) { return item }
    }

    return true;
}

console.log(hashTable_08_03("the quick brown box jumps over a lazy dog"));