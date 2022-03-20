const func = (arr1, arr2) => {
    let result = 0;
    for (const item of arr1) {
        for (const item2 of arr2) {
            item === item2 ? result++ : null;
        }
    }
    return result;
};
console.log(func([1, 4], [8, 4]));