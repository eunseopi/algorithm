function sum(low, high) {
    if (high === low) return low;
    return high + sum(low, high - 1);
}


console.log(sum(1, 10));


// 위 코드대로 하면
// 10 + sum(1, 9);
// 9 + sum(1,8);
// 8 + sum(1,7);
// 7 + sum(1,6);
// 6 + sum(1,5);
// 5 + sum(1,4);
// 4 + sum(1,3);
// 3 + sum(1,2);
// 2 + sum(1,1);
// 1 + sum(1,0);

// -> 기저 조건 if (high === low) return low; 를 넣어줘야 무한 재귀 탈출 !

