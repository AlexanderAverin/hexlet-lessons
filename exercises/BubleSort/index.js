const BubleSort = (arr) => {
    let num = 0;
    let i = 0;
   do {
        for (;i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                num = arr[i];
                ar[i] = arr[i + 1];
                arr[i + 1] = num;
                i = 0;
            } else if (arr[0] > arr[i]) {
                num = arr[0];
                arr[0] = arr[1];
                arr[1] = num;
            }
        }
   } while (i < arr.length);
   return arr;
};
console.log(BubleSort([0, 4, 0, 10, -3]));