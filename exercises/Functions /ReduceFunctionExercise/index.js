const groupBy = (Data, Property) => {
  const cb = (acc, user) => {
    if (!acc[user[Property]]) {
      acc[user[Property]] = [];
    }
    acc[user[Property]].push(user);
    return acc;
  };
  return Data.reduce(cb, {});
};

// For test
const users = [
  { name: 'Petr', age: 4 },
  { name: 'Igor', age: 19 },
  { name: 'Vovan', age: 4 },
  { name: 'Matvey', age: 16 },
  { name: 'Tirion', age: 3 },
  { name: 'User', age: 16 },
];

console.log(groupBy(users, 'age'));
