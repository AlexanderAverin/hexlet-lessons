const smallestDivisor = (num) => {
  
  const iter = (counter, acc) => {
    if (num === 1) {
      return 1;
    }
    if (acc % counter === 0) {
      return counter;
    }
    return iter(counter + 1, acc);
  };

  return iter(2, num);

};

smallestDivisor(15);
