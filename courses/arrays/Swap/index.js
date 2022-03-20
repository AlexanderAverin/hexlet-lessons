const swap = (array) => {
    if (array.length < 2) {
        return array;
    }
        const [first, second] = [array[0], array[array.length - 1]];
        array[array.length - 1] = first;
    return array;
};
console.log(swap([1, 2, 3, 4]));