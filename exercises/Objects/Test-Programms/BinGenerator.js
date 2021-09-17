 const DecimalView  = (str) => {
    let i2 = 0;
    let check = null;
    while (check !== true) {
        if (str[i2] === "1") {
            check = true;
            return str.slice(i2);
        } else {
            i2 += 1;
        }
    }
 };

const BinGenerator = (num) => {
    let counter = 128;
    let number = num;
    let result = "";
    let i = 0;
    while (i < 8) {
      i += 1;
        if (number < counter) {
            result += "0";
            number = number;
        } else if (number > counter || number === counter) {
            result += "1";
            number = number - counter;
        }
       counter = counter / 2;
    }
   return DecimalView(result);
};
console.log(BinGenerator(5));