const  sumSquareDifference = (n) => {
    let result = 0;
    let counter = 0;
    let acc = 0;
    while (n > 0) {
      acc += n;
      counter = n * n;
      n--;
      result += counter;
    }
    return acc * acc - result;
  };
  console.log(sumSquareDifference(10));