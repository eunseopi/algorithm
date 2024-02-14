function solution(n) {
    let result = n.toString(3);
    let res = result.split("").reverse().join('');
    return parseInt(res,3);
}