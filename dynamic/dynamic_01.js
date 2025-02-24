// 아래는 불필요한 재귀 함수 중복 호출이 있는 코드

// function add_until_100(array) {
//     if (array.length === 0) return 0;
//     if (array[0] + add_until_100(array.slice(1)) > 100) {
//         return add_until_100(array.slice(1));
//     } else {
//         return array[0] + add_until_100(array.slice(1));
//     }
// }

// 아래는 중복 호출을 없앤 코드
function add_until_100(array) {
    if (array.length === 0) return 0;
    const sum_of_remaining_numbers = add_until_100(array.slice(1));
    if (array[0] + sum_of_remaining_numbers > 100) {
        return sum_of_remaining_numbers;
    }
    else {
        return array[0] + sum_of_remaining_numbers;
    }
}



