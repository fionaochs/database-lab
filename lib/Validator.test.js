const {
  Validator
} = require('./Validator.js');

//call new Validator with 'name'
const nameValidator = new Validator('name', {
  type: String,
  required: true
});

//use dog object to access name
const dog = {
  name: 'spot',
  age: '5',
  weight: '20 lbs'
};

describe('validator module', () => {
  describe('basic validation', () => {
    it('validates name', () => {
      //result is new validator constructor with validateMethod that is a method that takes in dog object
      //validate dog name
      const nameResult = nameValidator.validateMethod(dog);
      //Validator(constructor).validateMethod(dog)
      //nameResult should give us name key that equals 'spot'
      expect(nameResult).toEqual('spot');

    });
  });
});
