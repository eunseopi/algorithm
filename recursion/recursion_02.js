function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 2);
}

factorial(10);

// -> n 이 1이 되지 않아서, 무한 재귀 함수가 된다.
// Maximum call stack size exceeded 에러 발생

