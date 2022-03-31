import fs from 'fs/promises';

const parseLine = (line) => {
  const [number, name, phone] = line.split('|');
  return { number, name, phone };
};

const parse = async (filepath) => {
  const data = await fs.readFile(filepath, 'utf8');

  const arrayFromData = data
    .trim()
    .split('\n');

  return arrayFromData.reduce((acc, person) => {
    const { number, name, phone } = parseLine(person);
    const index = number.trim();
    return { ...acc, [index]: { name, phone } };
  }, {});
};

export default parse;
