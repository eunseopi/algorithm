function double_array(array) {
    if (array.length === 0) return [];

    if (array[0] % 2 === 0) {
        return [array[0], ...double_array(array.slice(1))];
    } else {
        return double_array(array.slice(1));
    }
}

console.log(double_array([1, 2, 3, 4, 5, 6]));
