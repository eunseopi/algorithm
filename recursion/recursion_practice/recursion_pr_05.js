function shortCount(m,n) {
    // (0,0) -> (0,n) 또는 (m,0) 까지는 경로가 1개
    if (m === 1 || n === 1) return 1;

    // 오른쪽으로 가는 경우 (m, n-1) + 아래로 가는 경우(m-1, n)
    return shortCount(m - 1, n) + shortCount(m, n - 1);
}

console.log(shortCount(3, 7));

// 3,7 - shortCount(2,7) + shortCount(3, 6)
// 2,7 - shortCount(1,7)  === 1
// 3,6 - shortCount(
