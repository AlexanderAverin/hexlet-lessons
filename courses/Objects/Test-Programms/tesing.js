class Cats {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.full = false;
  }

  Feed() {
    this.full = true; 
  }
    
}

const cat1 = new Cats('Tisha', 4);

cat1.Feed();
console.log(cat1.name);

