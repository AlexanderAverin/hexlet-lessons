import Easy from './ai/Easy.js';
import Normal from './ai/Normal.js';

const getNormalisedCordinats = (x, y) => [x > 2 ? 2 : x, y > 2 ? 2 : y];

const isWinnerMove = (map) => {
  const case1 = [map[0], map[1], map[2]];
  const case2 = [map[3], map[4], map[5]];
  const case3 = [map[6], map[7], map[8]];

  const case4 = [map[0], map[3], map[6]];
  const case5 = [map[1], map[4], map[7]];
  const case6 = [map[2], map[5], map[8]];

  const case7 = [map[0], map[4], map[8]];
  const case8 = [map[2], map[4], map[6]];

  const range1 = !case1.includes(undefined) && (case1.indexOf('user') === -1 || case1.indexOf('ai') === -1);
  const range2 = !case2.includes(undefined) && (case2.indexOf('user') === -1 || case2.indexOf('ai') === -1);
  const range3 = !case3.includes(undefined) && (case3.indexOf('user') === -1 || case3.indexOf('ai') === -1);

  const column1 = !case4.includes(undefined) && (case4.indexOf('user') === -1 || case4.indexOf('ai') === -1);
  const column2 = !case5.includes(undefined) && (case5.indexOf('user') === -1 || case5.indexOf('ai') === -1);
  const column3 = !case6.includes(undefined) && (case6.indexOf('user') === -1 || case6.indexOf('ai') === -1);

  const direct = !case7.includes(undefined) && (case7.indexOf('user') === -1 || case7.indexOf('ai') === -1);
  const direct2 = !case8.includes(undefined) && (case8.indexOf('user') === -1 || case8.indexOf('ai') === -1);

  if (range1 || range2 || range3 || column1 || column2 || column3 || direct || direct2) {
    return true;
  }

  return false;
};

const isUserMove = (string, column) => string !== null && column !== null;

class TicTacToe {
  constructor(difficult = 'easy') {
    this.Difficult = difficult === 'normal' ? Normal : Easy;
    this.map = new Array(9);
  }

  go(string = null, column = null) {
    if (isUserMove(string, column)) {
      const [normalString, normalColumn] = getNormalisedCordinats(string, column);
      const newPosition = normalString * 3 + normalColumn;
      if (this.map[newPosition] !== 'ai') {
        this.map[newPosition] = 'user';
      }
    }
    if (!isUserMove(string, column)) {
      const ai = new this.Difficult(this.map);
      this.map = ai.go();
    }
    return isWinnerMove(this.map);
  }

  get() {
    return this.map;
  }
}

const game = new TicTacToe('normal');
