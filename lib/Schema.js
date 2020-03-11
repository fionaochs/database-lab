const Validator = require('./Validator.js');


module.exports = class Schema {


  constructor(schema) {
    this.schema = schema;
    this.validators = Object.entries(schema)
      .map(([key, object]) => new Validator(key, object));
  }

  validate(object){
    const validated = {};
    this.validators.forEach(validator => {
      console.log(validator);
      validated[validator.key] = validator.validate(object);
    });
    return validated;
  }
};

