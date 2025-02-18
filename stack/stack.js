class Stack {
    constructor() {
        this.stack = [];
        this.index = 0;
    }

    push(item) {
        this.stack[this.index++] = item;
    }

    pop() {
        if (this.index <= 0) return null;
        return this.stack[--this.index];
    }
}

function reverseString(str) {
    let stack = new Stack();
    let reverseStr = "";

    for (let i= str.length-1 ; i >= 0 ; i--) {
        stack.push(reverseStr += str[i]);
    }

    return reverseStr;
}

console.log(reverseString("abcde"));