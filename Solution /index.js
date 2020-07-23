const solution = (str) => {
    let i = 0;
    let result = "";
    while (i < str.length) {
        if (str[i - 1] == " " && str[i] !== " ") {
            result += str[i].toUpperCase();
        } else if (str[i] == str[0]) {
            result += str[0].toUpperCase();
        } else {
            result += str[i];
        }
        i++;
    }
    return result;
};
console.log(solution(' many different words inside sentence'))