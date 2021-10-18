import _ from 'lodash';

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item, count) {
    this.items = [...this.items, { item, count }];
  }

  getItems() {
    return this.items;
  }

  getCount() {
    return _.sumBy(this.items, (obj) => obj.count);
  }

  getCost() {
    return _.sumBy(this.items, (obj) => obj.count * obj.item.price);
  }
}

const cart1 = new Cart();
cart1.addItem({ name: 'car', price: 3 }, 5);
cart1.addItem({ name: 'house', price: 10 }, 2);

console.log(cart1.getCount());
