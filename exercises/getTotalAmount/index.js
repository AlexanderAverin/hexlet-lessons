const getTotalAmount = (arr, name) => {
    let result = 0;
    for (const item of arr) {
        if (item !== undefined && item.slice(0, 3) === name) {
            result += Number(item.slice(3));
    } else if (item !== undefined && item.slice(0, 3) !== name) {
        continue;
    }
  }
    return result;
};
console.log(getTotalAmount(['eur 10', 'usd 1',, 'usd 5'], "usd"))
