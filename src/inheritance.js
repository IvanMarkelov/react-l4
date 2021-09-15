class Animal {
  constructor(name) {
    this.name = name;
  }
  sleep() {
    console.log(`${this.name} is sleeping`);
  }
}

class ZooAnimal extends Animal {
  lookAtPeople() {
    console.log(`${this.name} is looking at people`);
  }
}

class Primate extends Animal {
  climb() {
    console.log(`${this.name} is climbing the tree`);
  }
}

class Monkey extends Primate {
  eatBanana() {
    console.log(`${this.name} is eating banana`);
  }
}

const monkey = new Monkey("Inherited Tim");
monkey.climb();
monkey.eatBanana();
monkey.sleep();
monkey.lookAtPeople(); //not working
