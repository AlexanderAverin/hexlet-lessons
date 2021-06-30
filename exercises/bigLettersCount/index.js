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
const compare = (first, second) => {
const firstCount = func(first);
const secondCount = func(second);
if (first > second) {
    return 1;
  } else if (second > first) {
    return -1;
  } else {
    return 0;
  }
};
console.log(compare('AD', 'ad sd'));
