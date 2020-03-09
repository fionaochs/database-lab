const {
  isNumber,
  castToNumber,
  getCaster,
  isString,
  castToString,
  castToBoolean,
  isBoolean,
  isArray,
  isFunction,
  isObject
} = require('./types.js');

describe('validator module', () => {
  describe('basic validation', () => {
    it('properly tells if a value is a numbers', () => {
      expect(isNumber(3)).toBeTruthy();
      expect(isNumber('hi')).toBeFalsy();
      expect(isNumber([])).toBeFalsy();
      expect(isNumber({})).toBeFalsy();
      expect(isNumber(() => {})).toBeFalsy();
      expect(isNumber(true)).toBeFalsy();
    });
    it('properly tells if a value is a string', () => {
      expect(isString('hello')).toBeTruthy();
      expect(isString(3)).toBeFalsy();
    });
    it('properly tells if a value is a boolean', () => {
      expect(isBoolean(true)).toBeTruthy();
      expect(isBoolean('false')).toBeFalsy();
    });
    it('properly tells if a value is a array', () => {
      expect(isArray([])).toBeTruthy();
      expect(isArray(4)).toBeFalsy();
    });
    it('properly tells if a value is a object', () => {
      expect(isObject({})).toBeTruthy();
      expect(isObject('false')).toBeFalsy();
    });
    it('properly tells if a value is a function', () => {
      expect(isFunction(() => {})).toBeTruthy();
      expect(isFunction(false)).toBeFalsy();
    });
  });

  describe('casters', () => {
    it('can cast values to a number', () => {
      expect(castToNumber(3)).toEqual(3);
      expect(castToNumber('3')).toEqual(3);
      expect(castToNumber(true)).toEqual(1);
      expect(castToNumber(false)).toEqual(0);
    });
    describe('casters', () => {
      it('can cast values to a string', () => {
        expect(castToString(3)).toEqual('3');
        expect(castToString(true)).toEqual('true');
        expect(castToString(false)).toEqual('false');
      });
      it('can cast values to a boolean', () => {
        expect(castToBoolean(1)).toBeTruthy();
        expect(castToBoolean(0)).toBeFalsy();
      });

      it('throws if value is not castable to number', () => {
        expect(() => castToNumber('hi')).toThrowErrorMatchingSnapshot();
        expect(() => castToNumber({})).toThrowErrorMatchingSnapshot();
      });
      it('throws if value is not castable to string', () => {
        expect(() => castToString([])).toThrowErrorMatchingSnapshot();
        expect(() => castToString({})).toThrowErrorMatchingSnapshot();
      });
      it('throws if value is not castable to boolean', () => {
        expect(() => castToBoolean(null)).toThrowErrorMatchingSnapshot();
        expect(() => castToBoolean([])).toThrowErrorMatchingSnapshot();
      });
    });

    it('can get the right caster', () => {
      expect(getCaster(Number)).toEqual(castToNumber);
      expect(getCaster(Promise)).toBeNull();
    });
  });
});
