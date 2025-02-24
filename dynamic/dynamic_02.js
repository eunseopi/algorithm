// 메모제이션 기법 쓰기 전 코드
// function golomb(n) {
//     if(n===1) return 1;
//     return 1 + golomb(n - golomb(n-1));
// }


// 메모제이션 기법 쓴 코드
function golomb(n, memo={}) {
    if(n===1) return 1;

    if (memo[n] !== undefined) return memo[n];

    memo[n] = 1 + golomb(n - golomb(n - 1, memo), memo);

    return memo[n];
}