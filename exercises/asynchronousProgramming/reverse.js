import fs from 'fs/promises';

const reverse = (filepath) => fs.readFile(filepath, 'utf-8')
  .then((data) => data.split('\n').reverse().join('\n'))
  .then((text) => fs.writeFile(filepath, text));

reverse();
