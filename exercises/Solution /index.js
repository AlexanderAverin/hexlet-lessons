const solution = (str) => {
    let i = 1;
    let result = str[0].toUpperCase();
    while (i < str.length) {
        if (str[i - 1] == " " && str[i] !== " ") {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
        i++;
    }
    return result;
};
console.log(solution("hello    how     are         you"));