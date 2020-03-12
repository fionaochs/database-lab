const Schema = require('./Schema');
const Model = require('./Model');
// const fs = require('fs');
const { readDirectoryJSON } = require('./file-system');
const { deleteFile } = require('./file-system');
describe('Model class', () => {
  let schema;
  let dog;
  beforeEach(() => {
    schema = {
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
    },
    dog = {
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    };
  });

  afterAll(() => {
    return readDirectoryJSON('../Dog')
      .then(dogs => dogs.forEach(dog => deleteFile(`Dog/${dog.id}`)));
  });


  it('creates a new document', () => {
    schema = new Schema(schema);
    const Dog = new Model('Dog', schema);

    return Dog
      .create(dog)
      .then(dog => {
        expect(dog).toEqual({
          _id: expect.any(String),
          name: 'spot',
          age: 5,
          weight: '20 lbs'
        });
      });
  });

  it('finds object by id', () => {
    schema = new Schema(schema);
    const Dog = new Model('Dog', schema);
    return Dog  
      .create(dog)
      .then(dog => {
        return Dog
          .findById(dog._id)
          .then(dog => {
            expect(dog).toEqual({
              _id: expect.any(String),
              name: 'spot',
              age: 5,
              weight: '20 lbs'
            });
          });
      });
  });
  it('finds object', () => {
    schema = new Schema(schema);
    const Dog = new Model('Dog', schema);
    return Dog
      .create(dog)
      .then(() => {
        return Dog.find();
      })
      .then(dog => {
        expect(dog).toContainEqual({
          _id: expect.any(String),
          ...dog
        });
      });
  });

  it('finds by id and updates', () => {
    schema = new Schema(schema);
    const Dog = new Model('Dog', schema);
    
    return Dog
      .create(dog)
      .then(dog => {
        return Dog
          .findByIdAndUpdate(dog._id, { name: 'rover' });
      })
      .then(updatedDog => {
        expect(updatedDog).toEqual({
          _id: expect.any(String),
          name: 'rover',
          age: 5,
          weight: '20 lbs'
        });
      });
  });

  it('finds an object by id and deletes it', () => {
    schema = new Schema(schema);
    const Dog = new Model('Dog', schema);
    return Dog  
      .create(dog)
      .then(deleteDog => {
        return Dog
          .findByIdAndDelete(deleteDog._id);
      })
      .then(deletedDog => {
        expect(deletedDog).toEqual({
          _id: expect.any(String),
          name: 'spot',
          age: 5,
          weight: '20 lbs'
        });
      });
  });
});

