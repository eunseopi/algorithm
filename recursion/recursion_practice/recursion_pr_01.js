function countString(array) {
    if (array.length === 0) return 0;

    return array[0].length + countString(array.slice(1));

    // array[0] 의 길이 + 나머지 배열에 있는 값 반환
    // "ab" = 2 + ["c" , "def", "ghij"] 이런식으로 !
}

console.log(countString(["ab", "c", "def", "ghij"]));
