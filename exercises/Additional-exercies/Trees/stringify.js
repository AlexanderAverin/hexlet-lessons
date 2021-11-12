const stringify = (value, replacer = ' ', spacesCount = 1) => {
  const replaceSymbol = replacer.repeat(spacesCount);
  return `${replaceSymbol}${String(value)}`;
};
const data = { hello: 'world', is: true, nested: { count: 5 } };

console.log(stringify(data));
