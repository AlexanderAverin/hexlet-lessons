const getNormalString = (str) => {
  const stringWithoutSpaces = str.split('').filter((word) => word !== ' ');
  const droppedString = stringWithoutSpaces.map((letter) => letter.toLowerCase()).join('');
  return droppedString;
};

const normalize = (data) => data.reduce((acc, item) => {
  const { name, country } = item;
  const [normalizeName, normalizeCountry] = [getNormalString(name), getNormalString(country)];
  acc[normalizeCountry] = acc[normalizeCountry] ?? [];
  return { ...acc, [normalizeCountry]: [...acc[normalizeCountry], acc[normalizeCountry].includes(normalizeName) ? [] : normalizeName].flat().sort() };
}, {});

const countries = [
  { name: 'Miami', country: 'usa' },
  { name: 'samarA', country: '  ruSsiA' },
  { name: 'Moscow ', country: ' Russia' },
];

console.log(normalize(countries));
