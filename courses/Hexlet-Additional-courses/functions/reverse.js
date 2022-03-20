const reverse = (str) => {
  const lastIndex = str.length - 1;
  const iter = (counter, acc) => {
   return counter > lastIndex ? acc : iter(counter + 1, acc + str[lastIndex - counter]);
  }
  return iter(0, '');
};
console.log(reverse('hello'));
