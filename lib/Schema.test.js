const Schema = require('./Schema.js');

describe('Schema', () => {
  // let nameValidator;
  // // before each test
  // beforeEach(() => {
  //   nameValidator = new Validator('name', {
  //     type: String,
  //     required: true
  //   });
  // });

  it('correctly checks entire object to see if correct schema', () => {
    const dog = {
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    };

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
    console.log(dogSchema.validators[0]);
    expect(dogSchema.validate(dog)).toEqual(dog);
  });
});
