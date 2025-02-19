function double_array(array, index = 0) {
    if (index >= array.length) return;

    array[index] *= 2;
    double_array(array, index+1);
}

const arr = [1, 2, 3, 4, 5];
double_array(arr);
console.log(arr);