const magic = (...numbers) => {
  const sum = numbers.reduce((acc, x) => (x + acc), 0);
  const inner = (...rest) => magic(sum, ...rest);
  inner.valueOf = () => sum;
  return inner;
};

console.log(magic(1, 2)(1));
