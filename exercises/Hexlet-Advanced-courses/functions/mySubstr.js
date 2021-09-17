const getNormalisedLength = (str, begin, length) => {
  if (length < 0) {
    return 1;
  }
  if (begin + length - 1 >= str.length) {
    return str.length - begin;
  }
  return length;
};

const getNormalisedBegin = (str, begin) => (begin < 0 ? 0 : begin);

const substr = (str, begin = 0, length = str.length) => {
  const normalBegin = getNormalisedBegin(str, begin);
  const normalLength = getNormalisedLength(str, normalBegin, length);
  let result = '';

  for (let i = normalBegin; result.length < normalLength; i += 1) {
    result += str[i];
  }
  return result === 'undefined' ? '' : result;
};

console.log(substr('abba', 0, 5));
