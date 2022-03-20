const addPrefix = (arr, prefix) => {
    let i = 0;
    const NewArr = [];
    for (let i = 0; i < arr.length; i++) {
        NewArr[i] = prefix + " " + arr[i];
    };
    return NewArr;
};
console.log(addPrefix([1, 2, 3, 4, 5, 6], "Num"));