const cons = (x, y) => (f) => f(x, y);

const pair = cons(5, cons(1, 2));

const car = (pair) => pair(((first, second) => first));
const cdr = (pair) => pair(((first, second) => second));
console.log(cdr(pair));
