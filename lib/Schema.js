const Validator = require('./Validator.js');


module.exports = class Schema {

  constructor(schema) {
    this.schema = schema;
    //validators take key from schema being passed in
    this.validators = Object.entries(schema)
      .map(([key, object]) => new Validator(key, object));
    //map over the schema object 
    //validate the key to the object key being passed in
  }

  validate(object){
    const validated = {};
    this.validators.forEach(validator => {
      //for each validator 
      validated[validator.key] = validator.validate(object);
    });
    //set validated object key equal to validate object key
    //key from dog object being passed in equals key from validator
    return validated;
  }
};

