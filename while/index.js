const smallestDivisor = (num) => {
    let counter = 2;
    let acc = num;
    while (acc % counter === 0) {
        counter = counter + 1;
    }
};
 return counter;