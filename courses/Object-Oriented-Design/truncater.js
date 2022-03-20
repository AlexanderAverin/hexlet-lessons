class Truncater {
  static defaultOptions = {
    separator: '...',
    length: 200,
  };

  constructor(config = {}) {
    this.configuration = {
      separator: config.separator ?? Truncater.defaultOptions.separator,
      length: config.length ?? Truncater.defaultOptions.length,
    };
  }

  truncate(str, fnConfig = {}) {
    const separator = fnConfig.separator ?? this.configuration.separator;
    const length = fnConfig.length ?? this.configuration.length;

    if (str.length > length) {
      return `${str.slice(0, length)}${separator}`;
    }
    return str;
  }
}

const test = new Truncater();

console.log(test.truncate('one two', { 'length': 6 }));
