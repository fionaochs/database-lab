const Schema = require('./Schema.js');

describe('Schema', () => {
  it('correctly checks entire object to see if correct schema', () => {
    const dog = {
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    };
    //set schema structure that we will base our objects off of
    const schema = {
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      weight: {
        type: String
      }
    };
    const dogSchema = new Schema(schema);
    //assign from Schema class being passed in schema structure
    expect(dogSchema.validate(dog)).toEqual(dog);
    //validate that dog object being passed to dogSchema will give us the correct form of object and will equal dog object
  });
});
