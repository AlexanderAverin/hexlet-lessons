const isPrime = (num) => {
    switch(num) {
        case 1:
        return false;
        break;
        case 2:
        return true;
        break;
    }
    let acc = 0;
    for (let counter = 2; num % counter > 0; counter += 1) {
      acc = counter;
    }
    switch(acc +1) {
        case num:
        return true;
        break;
    default:
        return false;
        break;
    }
};
console.log(isPrime(17));
