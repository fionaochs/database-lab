const {
  isString,
  castToString,
  isNumber,
  castToNumber
} = require('./types.js');

class Validator {
  constructor(keyValue, validation) {
    this.keyValue = keyValue;
    this.validation = validation;
  }
  validateMethod(obj) {
    if(this.keyValue === 'name' || this.keyValue === 'weight') {
      const possibleName = isString(obj[this.keyValue]) 
        ? obj[this.keyValue] 
        : castToString(obj[this.keyValue]);
      return possibleName;
    }
    if(this.keyValue === 'age') {
      const possibleAge = isNumber(obj[this.keyValue]) 
        ? obj[this.keyValue] 
        : castToNumber(obj[this.keyValue]);
      return possibleAge;
    }
  }
}


module.exports = {
  Validator
};
