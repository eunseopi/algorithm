function isSubset(array1, array2) {
    let largeArray;
    let smallArray;
    let hashTable = {};

    if(array1.length > array2.length) {
        largeArray = array1;
        smallArray = array2;
    } else {
        largeArray = array2;
        smallArray = array1;
    }

    // largeArray 의 모든 항목을 hashTable 에 저장한다.
    for(const value of largeArray) {
        hashTable[value] = true;
    }

    // smallArray 의 각 항목을 순회하면서
    // hashTable 에 없는 항목이면 false 를 반환한다.
    for(const value of smallArray) {
        if(!hashTable[value]) {return false}
    }

    // false 를 반환하지 않고 코드에서 여기까지 왔다면
    // smallArray 의 모든 항목이 largeArray 에 들어 있다는 뜻
    return true;

}

console.log(isSubset(["a", "b", "c", "d", "e", "f"], ["b","d","f"]));
