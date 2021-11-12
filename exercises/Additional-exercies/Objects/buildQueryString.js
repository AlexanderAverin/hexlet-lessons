const giveSortKeys = (obj) => Object.keys(obj).sort();

const StringBqs = (obj) => {
  const keys = giveSortKeys(obj);
  let str = '';
  for (const key of keys) {
    str += `${key}=${obj[key]}`;
    if (key === keys[keys.length - 1]) {
      return str;
    }
    str += '&';
  }
  return '';
};

// Another way

const ArrayBqs = (obj) => {
  const keys = giveSortKeys(obj);
  const result = [];
  for (const key of keys) {
    result.push(`${key}=${obj[key]}`);
    if (key === keys[keys.length - 1]) {
      return result.join('&');
    }
  }
  return '';
};

console.log(ArrayBqs({ a: 1, b: 3 }));
