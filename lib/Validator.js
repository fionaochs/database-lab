const { getCaster } = require('./types');

module.exports = class Validator {
  // Validator takes two properties
  // key - which is the key we are going to validate
  // object - which gives us info about how to validate
  constructor(key, object) {
    this.key = key;
    this.object = object;
  }

  // obj - is the object we want to run through validation
  validate(obj) {
    // if key is required and missing
    if(this.object.required && !(this.key in obj)) {
      throw new Error(`Missing required key >>${this.key}<<`);
    }

    // if not required and missing
    if(!this.object.required && !(this.key in obj)) {
      return null;
    }
    // getCaster(String) -> castToString
    // getCaster(Number) -> castToNumber
    // getCaster(Boolean) -> castToBoolean
    const caster = getCaster(this.object.type);
    return caster(obj[this.key]);
  }
};
