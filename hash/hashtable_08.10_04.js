function hashTable_08_04(str) {
    let hashTable = {};

    for(const item of str) {
        hashTable[item] = (hashTable[item] || 0) + 1;
    }

    let sortedChars = Object.keys(hashTable).sort();

    for (const char of sortedChars) {
        if(hashTable[char] === 1) {
            return char;
        }
    }
}

console.log(hashTable_08_04("minimum"));