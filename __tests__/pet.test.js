
const Pet = require('../src/pet');


describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property - returns an object with the name property passed in as an argument', () => {
      const pet = new Pet('Fido');
      expect(pet.name).toEqual('Fido');
    });
  });