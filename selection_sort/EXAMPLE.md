```javascript
function insersection(firstArray, secondArray){
    let result = [];
    
    for (let i = 0; i < firstArray.length; i++){
        for(let j = 0; j < secondArray.length; j++){
            if (firstArray[i] === secondArray[j]){
                result.push(firstArray[i]);
            }
        }
    }
    
    return result;
}
```

#### 여기선 N x N 비교를 해야해서 O(N^2) 이 나온다.

```javascript
function insersection(firstArray, secondArray){
    let result = [];
    
    for (let i = 0; i < firstArray.length; i++){
        for(let j = 0; j < secondArray.length; j++){
            if (firstArray[i] === secondArray[j]){
                result.push(firstArray[i]);
                break;
            }
        }
    }
    
    return result;
}
```

### 여기선 최악의 경우에는 O(N^2) 이지만, 같은 값을 찾는다면 O(N) 의 시간 복잡도가 나온다.