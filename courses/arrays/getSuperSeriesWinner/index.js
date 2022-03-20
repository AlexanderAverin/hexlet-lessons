const getSuperSeriesWinner = (arr) => {
    let UssrResult = 0;
    let CanadaResult = 0;
    let i = 0;
    while (i < arr.length) {
        if (Math.sign(arr[i][0]) === -1 || Math.sign(arr[i][1]) === -1) {
            break;
        } else if (arr[i][0] > arr[i][1]) {
            CanadaResult++;
        } else if (arr[i][1] > arr[i][0]) {
            UssrResult++;
        }
        i++;
    }
    if (UssrResult > CanadaResult) {
        return "ussr";
    } else if (UssrResult < CanadaResult) {
        return "canada";
    } else if (CanadaResult === UssrResult) {
        return null;
    }
};
console.log(getSuperSeriesWinner([]));