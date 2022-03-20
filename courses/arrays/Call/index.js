const call = (arr) => {
    if (arr.length === 0) {
        return null;
    }
    let i = 0;
    let result = 0;
    while (i < arr.length - 1) {
        if (arr[i] % 3 === 0) {
            result += arr[i];
            i++;
        } else {
            i++;
        }
    }
    return result;
};
console.log(call([]));