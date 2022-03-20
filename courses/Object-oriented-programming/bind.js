// const obj = { number: 7 };
// const fn2 = function fn(number1, number2) {
//   return number1 + this.number - number2;
// };

const make = (object, fn) => ({ ...object, fn });

const bind = (object, fn) => (...arg) => {
  const newContext = make(object, fn);
  return newContext.fn(...arg);
};

// const fnWithContext = bind(obj, fn2);

// console.log(fnWithContext(3, 2));
