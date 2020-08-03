const fizzBuzz = (begin, end) => {
    if (begin > end) {
        return "";
    }
    let n = begin - 1;
    while (n < end) {
        n++;
     if (n % 3 === 0 && n % 5 === 0) {
        console.log("FizzBuzz");
     } else if (n % 5 === 0) {
         console.log("Buzz");
     } else if (n % 3 === 0) {
         console.log("Fizz");
     } else {
         console.log(n);
     }
 }
};
console.log(fizzBuzz(14, 20));