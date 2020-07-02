const smallestDivisor = (num) => {
    if (num === 1) {
        return 1;
    }
    if (num < 1) {
      return NaN;
    }
    let counter = 2;
    while (num % counter >= 1 ) {
        counter = counter + 1;
    }
    return counter;
};
