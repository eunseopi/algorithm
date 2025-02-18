function hashtable_0810(array1, array2) {
    let hashTable = {};
    let result = [];

    for (const value of array1) {
        hashTable[value] = true;
    }

    for (let i = 0; i < array2.length; i++) {
        if(hashTable[array2[i]]) {
            result.push(array2[i]);
        }
    }


    return result;
}

console.log(hashtable_0810([1,2,3,4,5],[0,2,4,6,8]));