function createAnimal(name) {
  const animal = { name };
  return {
    ...programmer,
    ...canSleep(programmer),
  };
}

function canSleep({ name }) {
  return {
    sleep: () => console.log(`${name} is sleeping`),
  };
}

function createZooAnimal(name) {
  const zooAnimal = createAnimal(name);
  return {
    ...zooAnimal,
    ...canLookAtPeople(zooAnimal),
  };
}

function canLookAtPeople(name) {
  console.log(`${name} is looking at people`);
}

function createPrimate(name) {
    const primate = createAnimal(name);
    return {
      ...primate,
      ...canClimb(primate),
    };
}

function canClimb(name) {
  console.log(`${name} is climbing the tree`);
}

function createMonkey(name) {
    const monkey = createPrimate(name);
    return {
      ...monkey,
      ...canLookAtPeople(monkey),
      ...canEatBanana(monkey),
    };
}

function canEatBanana(name) {
    console.log(`${name} is eating banana`);
  }

const monkey = new Monkey("Composite Alex");
monkey.climb();
monkey.eatBanana();
monkey.sleep();
monkey.lookAtPeople(); //working
