const parseJson = (jsonFile) => {
  try {
    JSON.parse(jsonFile);
  } catch (err) {
    return -1;
  }
  return JSON.parse(jsonFile);
};

console.log(parseJson('{ name": "Tisha" }'));
