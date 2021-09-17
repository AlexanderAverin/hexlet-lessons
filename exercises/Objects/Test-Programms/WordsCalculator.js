const WordsCalculator = (str) => {
  let result = "";
  let word = "";
  let i = 0;
  const Map = {
    one: 1,
    two: 2, 
    three: 3, 
    four: 4,
    five: 5, 
    six: 6, 
    seven: 7, 
    eight: 8,
    nine: 9,
    ten: 10,
    plus: "+",
    minus: "-"
  };
  while (i <= str.length) {
    if (str[i] !== " " && str[i] !== undefined) {
      word += str[i];
    } else if (str[i] === " " || i === str.length) {
      result += Map[word] + " ";
      word = "";
    }
  i += 1;
  }
  return result;
};
console.log(WordsCalculator("one two three"));

