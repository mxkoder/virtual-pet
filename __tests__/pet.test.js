
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


