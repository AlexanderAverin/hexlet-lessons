//const cat = {name: "Tisha" , age: 5 , feed: true};

//const func = (num) => {
 // const obj = {name: "tisha", age: 5};
 // return obj;
//};
// console.log(func());

//const getJsonFileData = (file) => {
//const obj = {
  //   files: [
 //   "src/objects.js"
  //],
 //   config: true,
 // }
 // return obj;
//};

//const lesson = {
 // name: 'ДеструКТУРИЗАЦИЯ',
  //description: 'каК удивитЬ колек',
//};
//const func2 = (lessons) => {
 // lesson.description = lesson.description.toLowerCase();
//  return lesson;
//};
// console.log(func2());



//const str = "HELLO DOG";
// console.log(str.replace("DOG", ""));


//const name2 = "Tisha";
//const age2 = 5;
//const info = {
//  name2,
 // age2,
////};
// console.log(info);

//const info2 = {name: "TISHA", age3: 5};
// console.log(info2.id);











const countWords = (str) => {
  if (str === "") {
    return {};
  }
  const words = {};
    let word = "";
  for (const name of str ) {
   word = name.toLowerCase();
    if (words[name] === undefined) {
      words[name] = 1;
    } else {
      words[name] += 1;
    }
  }
  return words;
};
 // console.log(countWords(["two", "one", "three", "one", "one", "five"]));
 
 
 
 const data = {
  user: 'ubuntu',
  os: 'linux',
};


 const pick = (obj, names) => {
  if (names.length === 0) {
    return {};
  }
  const keys = Object.keys(obj);
  const result = {};
  for (const key of keys) {
    for (const name of names)
    if (key === name) {
      result[key] = obj[key];
    }
  }
  return result;
};
console.log(pick(data, ["user", "os"]));


