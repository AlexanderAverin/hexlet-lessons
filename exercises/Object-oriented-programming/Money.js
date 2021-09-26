function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.add = function add(money) {
  if (this.currency === money.currency) {
    return new Money(this.value + money.value, this.currency);
  }
  const [Money1, Money2] = [this.exchangeTo(this.currency), money.exchangeTo(this.currency)];
  return new Money(Money1.getValue() + Money2.getValue(), this.currency);
};

Money.prototype.format = function format() {
  const symbols = {
    usd: '$',
    eur: '€',
  };
  const symbol = symbols[this.currency];
  return `${symbol}${this.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

Money.prototype.exchangeTo = function exchangeTo(curr) {
  const changeObj = {
    usd: this.value * 0.7,
    eur: this.value * 1.2,
  };
  const newValue = curr === this.currency ? this.value : changeObj[this.currency];
  return new Money(newValue, curr);
};

Money.prototype.getCurrency = function getCurrency() {
  return this.currency;
};

Money.prototype.getValue = function getValue() {
  return this.value;
};

const money1 = new Money(10.35);
// const money2 = new Money(100, 'eur');
// console.log(money1.add(money2).getValue());
console.log(money1.format());
