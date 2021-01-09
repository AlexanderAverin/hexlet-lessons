const getIntersectionOfSortedArrays = (arr, arr2) => {
  const result = [];
  let i = 0;
  let i2 = 0;
  if (arr.length > arr2.length) {
    while (i2 <= arr2.length) {
      if (arr[i] === arr2[i2]) {
        result.push(arr[i]);
      } else if (i === arr.length) {
        i = 0;
        i2++;
    }
    i++;
  }
  } else if (arr2.length > arr.length) {
      while (i <= arr.length) {
        if (arr2[i2] === arr[i]) {
          result.push(arr2[i2]);
      } else if (i2 === arr2.length) {
        i2 = 0;
        i++;
      }
      i2++;
    }
  }
  return result;
};
console.log(getIntersectionOfSortedArrays([1, 2, 3], [2, 3, 4, 6]));n