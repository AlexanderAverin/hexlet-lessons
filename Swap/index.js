const swap = (array) => {
    if (array.length < 2) {
        return array;
    } else {
        const first = array[0];
        const second = array[array.length - 1];
        array[0] = second;
        array[array.length - 1] = first;
        return array;
    }
};
console.log(swap([1, 2, 3, 4]));