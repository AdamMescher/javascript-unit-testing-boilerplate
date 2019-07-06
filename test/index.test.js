const { expect } = require('chai');
const { returnTrue, returnFalse, returnString } = require('../index');

describe('returnTrue', () => {
  it('should return true', () => {
    const expected = true;
    const result = returnTrue();
    expect(result).to.equal(expected);
  });
});

describe('returnFalse', () => {
  it('should return false', () => {
    const expected = false;
    const result = returnFalse();
    expect(result).to.equal(expected);
  });
});

describe('returnString', () => {
  it('should return a string', () => {
    const expected = 'string';
    const result = returnString('King Soopers');
    expect(result).to.be.a(expected);
  });
  it('should return the string passed as an argument', () => {
    const expected = '¿cuando?';
    const result = returnString(expected);
    expect(result).to.equal(expected);
  })
});
