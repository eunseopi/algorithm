// function solution(arr)
// {
//     let result = [];
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] === arr[i+1]){
//             result[i] = arr[i+1].pop;
//         }else if(arr[i] !== arr[i+1]){
//             result[i] = arr[i];
//         }
//     }
//     let filtered = result.filter((el, i) => el != null);
//     return filtered;
// }
function solution(arr)
{
    var answer = [arr[0]];

    for(let i = 1; i < arr.length ; i++) {
        if(arr[i-1] !== arr[i]) answer.push(arr[i]);
    }

    return answer;
}