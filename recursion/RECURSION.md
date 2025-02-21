## 재귀 함수

함수가 자기 자신을 호추할 때를 뜻하는 용어이다.

```javascript
// 우주선 발사에 쓰일 카운트 다운 함수를 프로그래밍
function countdown(number) {
    for (let i=number; i >= 0; i--) {
        console.log(i);
    }
}

countdown(10);
```

-> 재귀함수로 바꾸면 아래와 같이 된다.

```javascript
function countdown(number) {
    console.log(number);
    countdown(number - 1);
}
```

#### 루프를 사용할 수 있는 경우랄면 거의 대부분 재귀도 쓸 수 있다.
#### 물론 재귀를 쓸 수 있다는 이유만으로 무조건 재귀를 써야하는 것은 아니다.

```javascript
function factorial(number) {
    if (number === 1) {
        return 1
    } else {
        return number * factorial(number - 1)
    }
}
```


#### 이 코드에서 기저 조건은 number === 1 이 부분이다.
#### 여기서 지금 factorial(3)을 호출한다고 하면,<br> 3은 기저 조건이 아니므로 다음 코드 줄로 가서 함수 factorial(2) 를 실행한다.
#### factorial(2) 실행을 시작할 땐 아직 factorial(3) 실행이 끝나지 않은 상태

-> 그래서 컴퓨터는 스택을 사용해 어떤 함수가 호출 중인지 기록을 한다. (호출 스택)

#### 무한 재귀 시에는 스택 오버플로 라는 오류가 발생한다.

