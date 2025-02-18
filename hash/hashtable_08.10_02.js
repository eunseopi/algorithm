function hashtable_08_02(array) {
    let hashTable = {};

    for (let i = 0; i < array.length; i++) {
        if(hashTable[array[i]]) {
            return array[i];
        } else {
            hashTable[array[i]] = true;
        }
    }

    return hashTable;
}

console.log(hashtable_08_02(["a", "b", "c", "d", "e", "f"]));