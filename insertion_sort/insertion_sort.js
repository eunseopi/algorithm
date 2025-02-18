function insertion_sort(array) {
    for (let i = 0; i < array.length; i++) {
        let temp_value = array[i];
        let position = i - 1;

        while (position >= 0) {
            if (array[position] > temp_value) {
                array[position + 1] = array[position];
                position -= 1;
            }
            else {
                break;
            }
        }
        array[position + 1] = temp_value;
    }
    return array;
}

console.log(insertion_sort([4, 2, 7, 1, 3]));