const  getSameParity = (arr) => {
    if (arr.length === 0) {
        return [];
    }
    const result = []; 
    for (const n of arr) {
        if (arr[0] % 2 === 0 && Math.abs(n) % 2 === 0) {
                result.push(n);
            } else if (arr[0] % 2 !== 0 && Math.abs(n) % 2 !== 0) {
                    result.push(n);
                }
            }
    return result; 
};
console.log(getSameParity([1, 2, -3]));