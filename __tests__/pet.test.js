
const Pet = require('../src/pet');

// need to refactor tests to remove magic numbers

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property - returns an object with the name property passed in as an argument', () => {
      const pet = new Pet('Fido');
      expect(pet.name).toEqual('Fido');
    });

    it('has an age property with an initial value of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.age).toEqual(0);
    });

    it('has a hunger property with an initial value of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.hunger).toEqual(0);
    });

    it('has a fitness property with an initial value of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.fitness).toEqual(10);
    });

  });


describe('growUp', () => {
    it('increments age by 1', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.age).toEqual(1);

      pet.growUp();
      expect(pet.age).toEqual(2);
    });

    it('increments hunger by 5', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.hunger).toEqual(5);

      pet.growUp();
      expect(pet.hunger).toEqual(10);
    });

    it('decrements fitness by 3', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.fitness).toEqual(7);

      pet.growUp();
      expect(pet.fitness).toEqual(4);
    });

    it('returns I can\'t grow up, I\'m dead if the pet is no longer alive', () => {
      const pet = new Pet('Fido');
      pet.age = 30;
      expect(() => pet.growUp()).toThrow("I can\'t grow up, I\'m dead :(");

      pet.fitness = 0;
      expect(() => pet.growUp()).toThrow("I can\'t grow up, I\'m dead :(");

      pet.hunger = 10;
      expect(() => pet.growUp()).toThrow("I can\'t grow up, I\'m dead :(");

      pet.isAlive = false;
      expect(() => pet.growUp()).toThrow("I can\'t grow up, I\'m dead :(");
    });
  });

describe('walk', () => {
    it('increments fitness by 4', () => {
      const pet = new Pet('Fido');
      pet.fitness = 4; 
      pet.walk();
      expect(pet.fitness).toEqual(8);

      pet.fitness = 5;
      pet.walk();
      expect(pet.fitness).toEqual(9);
    });

    it('does not increase fitness above the max value of 10', () => {
      const pet = new Pet('Fido');
      pet.fitness = 4; 
      pet.walk(); // pet.fitness = 8
      pet.walk(); 
      expect(pet.fitness).toEqual(10);

      pet.walk();
      expect(pet.fitness).toEqual(10);
    });

    it('returns I can\'t walk, I\'m dead if the pet is no longer alive', () => {
      const pet = new Pet('Fido');
      pet.fitness = -1;
      expect(() => pet.walk()).toThrow("I can\'t walk, I\'m dead :(");

      pet.hunger = 10;
      expect(() => pet.walk()).toThrow("I can\'t walk, I\'m dead :(");

      pet.isAlive = false;
      expect(() => pet.walk()).toThrow("I can\'t walk, I\'m dead :(");
    });

  });

describe('feed', () => {
    it('decreases hunger level by 3', () => {
      const pet = new Pet('Fido');
      pet.hunger = 4; 
      pet.feed();
      expect(pet.hunger).toEqual(1);

      pet.hunger = 8;
      pet.feed();
      expect(pet.hunger).toEqual(5);
    });

    it('does not decrease the hunger level below 0', () => {
      const pet = new Pet('Fido');
      pet.hunger = 2; 
      pet.feed();
      expect(pet.hunger).toEqual(0);

      pet.feed();
      expect(pet.hunger).toEqual(0);
    });

  });

describe('checkUp', () => {
      const pet = new Pet('Fido');

    it('returns I want FOOD and walkies if fitness is 3 or less and hunger is 5 or more', () => {
      pet.fitness = 2; 
      pet.hunger = 6; 
      expect(pet.checkUp()).toBe("I want FOOD and walkies!");

      pet.fitness = 3; 
      pet.hunger = 5; 
      expect(pet.checkUp()).toBe("I want FOOD and walkies!");
    });


    it('returns I want walkies if fitness is 3 or less', () => {
      pet.fitness = 2; 
      pet.hunger = 4;
      expect(pet.checkUp()).toBe("I want walkies");
    });

    it('returns Feed me now is hunger is 5 or more', () => {
      pet.hunger = 6; 
      pet.fitness = 5; 
      expect(pet.checkUp()).toBe("Feed me now!");
    });

    it('returns I feel great if does not need feeding or walking', () => {
      pet.hunger = 4; 
      pet.fitness = 5; 
      expect(pet.checkUp()).toBe("I feel great!");
    });
  });

describe('isAlive', () => {
  const pet = new Pet('Fido');

    it('returns false if fitness is 0 or less', () => {
      pet.fitness = 0; 
      expect(pet.isAlive).toBe(false);
    });


    it('returns false if hunger is 10 or more', () => {
      pet.hunger = 12; 
      expect(pet.isAlive).toBe(false);
    });

    it('returns false if age is 30 or more', () => {
      pet.age = 33; 
      expect(pet.isAlive).toBe(false);
    });

    it('returns returns true otherwise', () => {
      pet.age = 14;
      pet.hunger = 3;
      pet.fitness = 4; 
      expect(pet.isAlive).toBe(true);
    });

  });



  /*Your challenge in this step is to add some guard clauses to the walk,
   growUp and feed functions to prevent them from being used if the pet is not alive. 
   We also need to an a new return value to the checkUp function.

    if the pet is not alive, the checkUp function should return 'Your pet is no longer alive :('

    if the pet is not alive, the walk, growUp and 
    feed functions should each throw an exception 
    'Your pet is no longer alive :('.*/


