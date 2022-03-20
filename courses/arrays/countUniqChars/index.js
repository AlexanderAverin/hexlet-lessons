const countUniqChars = (str) => {
    const arr = str.split("");
    const check = [];
    for (const item of arr) {
        if (arr.includes(item) === true && check.includes(item) === false) {
            check.push(item);
        }
    }
    return check.length; 
};
console.log(countUniqChars('You know nothing Jon Snow'));