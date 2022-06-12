
const Pet = require('../src/pet');


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
    it('returns I want walkies if fitness is 3 or less', () => {
      const pet = new Pet('Fido');
      pet.fitness = 2; 
      expect(pet.checkUp()).toBe("I want walkies");
    });

  });


