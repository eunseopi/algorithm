function selection_sort(array) {
    for (let i = 0; i  < array.length - 1; i++) {
        let lowestNumberIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[lowestNumberIndex]) {
                lowestNumberIndex = j;
            }
        }

        if (lowestNumberIndex !== i) {
            let temp = array[i];
            array[i] = array[lowestNumberIndex];
            array[lowestNumberIndex] = temp;
        }
    }
    return array;
}

console.log(selection_sort([4,2,7,1,3]));
