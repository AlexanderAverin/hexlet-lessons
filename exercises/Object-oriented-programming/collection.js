// const each = (collection, callback) => {
//   const obj = collection;
//   const iter = (index) => {
//     if (index === obj.length) {
//       return obj;
//     }
//     callback.bind(obj[index])();
//     return iter(index + 1);
//   };
//   return iter(0);
// };

const each = (collection, callback) =>
  collection.forEach((obj) => callback.call(obj));

const objects = [{ name: 'Karl' }, { name: 'Mia' }];

each(objects, function callback() {
  this.name = this.name.split('').reverse().join('');
});

console.log(objects);
