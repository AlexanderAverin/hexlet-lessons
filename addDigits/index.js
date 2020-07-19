const addDigits = (num) => {
    let str = String(num);
    let result = null;
    let i = str.length;
        while (i > 0) {
            i -= 1;
            result += Number(str[i]);
        } 
        if (result > 9) {
            return addDigits(result); 
        } else {
            return result;
        }
    };
console.log(addDigits(38));