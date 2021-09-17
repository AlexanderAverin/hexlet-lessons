const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
};


const hasKey = (obj, key) => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

const get = (data, keys) => { 
  if (keys.length == 0) {
    return data;
  }
  
  const counter = keys[0];
  if (hasKey(data, counter)) {
    return get(data[counter], keys.slice(1));
    
  };
  return null;
   
};

console.log(get(data, ['undefined'])); // null
console.log(get(data, ['user'])); // 'ubuntu'
console.log(get(data, ['user', 'ubuntu'])); // null
console.log(get(data, ['hosts', 1, 'name'])); // 'web2'
console.log(get(data, ['hosts', 0])); // { name: 'web1' }
console.log(get(data, ['hosts', 1, null])); // 3
console.log(get(data, ['hosts', 1, 'active'])); // false 