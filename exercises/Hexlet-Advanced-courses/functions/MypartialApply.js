const sum = (a, b) => a + b;

const partialApply = (func, arg2) => (arg1) => func(arg1, arg2);

const sumAndSub = (a, b) => (a, b) => a - b;


