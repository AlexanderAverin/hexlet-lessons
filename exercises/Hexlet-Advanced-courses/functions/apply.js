const apply = (callsNumber, func, data) => {
  if (callsNumber === 0) {
    return data;
  }
  return apply(callsNumber - 1, func, func(data));
};

console.log(apply(2, Math.sqrt, 16));
