const makeCensored = (text, words) => {
    const TextArr = text.split(" ");
    const result = [];
    let i = 0;
    let i2 = 0;
    let check = 0;
   while (i2 < TextArr.length) {
       while (i < words.length) {
        TextArr[i2] === words[i] ? check++ : null;
        i++;
    }
    check === 0 ? result.push(TextArr[i2]) : result.push("$#%!");
    i2++;
    i = 0;
    check = 0;
}
    return result.join(" ");
};
const sentence = "chicken chicken? chicken! chicken";
console.log(makeCensored(sentence, ['?', 'chicken']));