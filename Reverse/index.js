const reverse = (str) => {
    let i = str.length;
    const counter = 1;
    let result = '';
    while (i - counter > -1) {
        i = i - counter;
        result = result + str[i];
    }
    return result;
};
console.log(reverse("Hello"))