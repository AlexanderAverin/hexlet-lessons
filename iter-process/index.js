const smallestDivisor = (num) => {

  const iter = (counter, acc) => {
    if (acc % counter === 0 ) {
      return counter;
    }
    
    return iter(counter + 1, acc);  
  };

  return iter(2, num);

};

console.log(smallestDivisor(17));
