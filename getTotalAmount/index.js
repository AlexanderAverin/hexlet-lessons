const getTotalAmount = (arr, name) => {
    let result = 0;
    for (const item of arr) {
        if (item === undefined || item === "") {
            break;
        } else if (name === "usd" && item.slice(0, 3) === "usd") {
            if (item.slice(0, 3) !== "usd") {
                continue;
            }
            result += Number(item.slice(4, item.length));
        } else if (name === "eur" && item.slice(0, 3) === "eur") {
            if (item.slice(0, 3) !== "eur") {
                continue;
            }
            result += Number(item.slice(4, item.length));
        } else if (name === "rub" && item.slice(0, 3) === "rub") {
            if (item.slice(0, 3) !== "rub") {
                continue;
            }
            result += Number(item.slice(4, item.length));
        }
    }
    return result;
};
console.log(getTotalAmount(['eur 10', 'usd 1',, 'usd 5'], "usd"));