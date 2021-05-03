const cat = {name: "Tisha" , age: 5 , feed: true};

const func = (num) => {
  const obj = {name: "tisha", age: 5};
  return obj;
};
console.log(func());

const getJsonFileData = (file) => {
  const obj = {
     files: [
    "src/objects.js"
  ],
    config: true,
  }
  return obj;
};

const lesson = {
  name: 'ДеструКТУРИЗАЦИЯ',
  description: 'каК удивитЬ колек',
};
const func2 = (lessons) => {
  lesson.description = lesson.description.toLowerCase();
  return lesson;
};
console.log(func2());



const str = "HELLO DOG";
console.log(str.replace("DOG", ""));


const name2 = "Tisha";
const age2 = 5;
const info = {
  name2,
  age2,
};
console.log(info);