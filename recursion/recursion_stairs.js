function number_of_paths(n) {
    // 기저 조건
    if (n < 0) return 0;
    if (n === 1 || n === 0) return 1;
    return number_of_paths(n - 1) + number_of_paths(n -2) + number_of_paths(n - 3);
}

console.log(number_of_paths(8));