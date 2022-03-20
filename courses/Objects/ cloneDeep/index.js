const { concat, isString, result } = require('lodash');
var _ = require('lodash');

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};
//const OneLevelObj = {name: "Tisha", age: 5, place: "Home"};

const KeysOfObject = (obj) => {
  return Object.keys(obj);
};

const copy = (obj) => {
  const result = {};
  for (const key of KeysOfObject(obj)) {
    if (_.isObject(obj[key]) === false) {
     result[key] = obj[key];
    }
    if (_.isObject(obj[key]) === true) {
      result[key] = copy(obj[key]);
    }
  }
  return result;
};
console.log(copy(data));
const test = copy(data);
//console.log(test);
//console.log(test.key2 !== data.key2);