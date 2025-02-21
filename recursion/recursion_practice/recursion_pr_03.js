function triangular_number(n) {
    if (n === 1) return 1;


    // 1,3,6,10,15,21
    // 1 = 1, 2번째 = 1+2, 3번째 = 3+3, 4번째 6+4
    return n + triangular_number(n-1)
}

console.log(triangular_number(7));
