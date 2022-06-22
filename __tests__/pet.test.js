
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

    it('returns I can\'t eat, I\'m dead if the pet is no longer alive', () => {
      const pet = new Pet('Fido');
      pet.age = 31;
      expect(() => pet.feed()).toThrow("I can\'t eat, I\'m dead :(");
// expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
      pet.hunger = 11;
      expect(() => pet.feed()).toThrow("I can\'t eat, I\'m dead :(");

      pet.isAlive = false;
      expect(() => pet.feed()).toThrow("I can\'t eat, I\'m dead :(");
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

    it('returns I\m not doing great, I\'m dead :( if the pet is no longer alive', () => {
      const pet = new Pet('Fido');
      pet.age = 30;
      expect(() => pet.checkUp()).toThrow("I\'m not doing great, I\'m dead :(");

      pet.hunger = 14;
      expect(() => pet.checkUp()).toThrow("I\'m not doing great, I\'m dead :(");

      pet.isAlive = false;
      expect(() => pet.checkUp()).toThrow("I\'m not doing great, I\'m dead :(");
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


describe('resurrect', () => {
    const pet = new Pet('Fido');

    it('returns a statement that says the pet is back', () => {
      pet.age = 31;
      pet.hunger = 10;
      pet.fitness = 0; 
      expect(pet.resurrect()).toBe("whoooooooosh....  I\'m back! ʕ•ᴥ•ʔ");
      
    });

    it('returns changes the values of the pet object to make the pet alive again', () => {
      pet.age = 31;
      pet.hunger = 11;
      pet.fitness = -3; 
      pet.resurrect();

      expect(pet.age).toEqual(15);
      expect(pet.hunger).toEqual(3);
      expect(pet.fitness).toEqual(6);
    });

    it('returns an error statement when applied to a pet that is alive', () => {
      pet.age = 25;
      pet.hunger = 5;
      pet.fitness = 2; 
      expect(() => pet.resurrect()).toThrow("I\'m alive!! You can\'t resurrect me.");
    });

  });
    
// Adopting a child: dependency injection
    describe('adoptChild', () => {
      
      it('the parent pet has a property called children, where the first element is the child instance originally passed to the adoptChild method', () => {
        const parent = new Pet('Fido');
        const child = new Pet('ChildOfFido');
        parent.adoptChild(child);
        expect(parent.children).toEqual([{ name: 'ChildOfFido', age: 0, hunger: 0, fitness: 10 }]);
      });

      it('adds the new child instance passed as an argument to the adoptChild method as the first object to the array in the children property of the parent', () => {
        const parent2 = new Pet('Fido2');
        const child1 = new Pet('ChildOfFido');
        const child2 = new Pet('SecondChildOfFido');
        parent2.adoptChild(child1);
        parent2.adoptChild(child2);
        expect(parent2.children).toEqual([{ name: 'SecondChildOfFido', age: 0, hunger: 0, fitness: 10 }, { name: 'ChildOfFido', age: 0, hunger: 0, fitness: 10 }]);
      });

  });

  // Having a baby: creating a new child object of the same instance as the parent
  describe('haveBaby', () => {
    const parent = new Pet('Dave');
    parent.haveBaby('Amelia');

    it('results in the parent pet\'s children property being an array', () => {
      expect(Array.isArray(parent.children)).toBeTruthy();
    });

    it('results in the first element of the children property array of the parent being an instance of Pet', () => {
      expect(parent.children[0] instanceof Pet).toBeTruthy();
    });

    it('creates an object with a name property of the child\'s name', () => {
      expect(parent.children[0].name).toBe('Amelia');
    });
});


  /* Make 1 Pet instances - the parent.

  Call a method on the parent pet, which you pass the child's name into as an argument e.g. haveBaby('Amelia').

  Assert that the parent pet's children property is an array, where the first element is an instance of Pet with 
  a name property of Billy (2 different assertions). */