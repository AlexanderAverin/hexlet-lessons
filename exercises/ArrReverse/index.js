const reverse = (arr) => {
    let i = 0;
    let j = arr.length - 1;
    let char = "";
    while (i < j) {
      char = arr[i];
       arr[i] = arr[j];
       arr[j] = char;
        i++;
        j--;
    }
    return arr;
};
console.log(reverse(['john', 'smith', 'karl', 'b', 'a']));
