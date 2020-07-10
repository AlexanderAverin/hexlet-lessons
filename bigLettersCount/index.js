const func = (str) => {
    let i = str.length;
    let result = 0;
    const counter = 1;
   while (i - counter >= 0) {
       i -= 1;
       if (str[i].toUpperCase(str[i]) === str[i]) 
         result += 1;
   }
       return result;
};
console.log(func("Hello"));