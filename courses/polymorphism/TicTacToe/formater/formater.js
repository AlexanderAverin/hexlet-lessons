const mapping = {
  ai: 'X',
  user: 'O',
};

const field = `
----------------------------
|                          |
|                          |
|                          |
|                          |
|                          |
|                          |
|                          |
|                          |
|                          |
|                          |
----------------------------`;

const format = (field) => field
  .map((cell) => (cell === [] ? '[]' : mapping[cell]))
  .reduce((cell, acc) => `${acc}| ${cell} |`, field);

const game = [
  'ai', [], [],
  'user', [], 'user',
  [], 'ai', [],
];

console.log(format(game));
