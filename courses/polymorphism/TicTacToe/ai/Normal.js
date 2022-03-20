class Normal {
  constructor(map) {
    this.map = map;
  }

  go() {
    for (let i = 6; i >= 0; i -= 3) {
      if (!this.map[i] && this.map[i] !== 'user') {
        this.map[i] = 'ai';
        return this.map;
      }
      if (!this.map[i + 1] && this.map[i + 1] !== 'user') {
        this.map[i + 1] = 'ai';
        return this.map;
      }
      if (!this.map[i + 2] && this.map[i + 2] !== 'user') {
        this.map[i + 2] = 'ai';
        return this.map;
      }
    }
    return this.map;
  }
}

export default Normal;
