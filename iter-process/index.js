const smallestDivisor = (num) => {
    const iter = (counter, acc) => {
      if (acc % counter >= 1) {
        return acc;
      }
      return acc / iter(counter + 1, acc / counter);
    };
    return iter(2, num);
  };

  smallestDivisor(9);

  export default smallestDivisor;