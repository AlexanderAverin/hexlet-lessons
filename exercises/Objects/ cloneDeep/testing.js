const data = {
  name: "Tisha", 
  age: 5
};

const func = (obj, arr = Object.keys(obj)) => {
  const result = [];
  if (arr.length === 1) {
    return result;
  }
  return result + func(obj[arr[0]], arr.slice(1))
}
console.log(func(data))
