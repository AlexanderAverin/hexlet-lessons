class Time {
  static fromString(str) {
    const [hours, minutes] = str.split(':');
    return new Time(hours, minutes);
  }

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}

const time = Time.fromString('11:12');
console.log(`Time is ${time}`);
