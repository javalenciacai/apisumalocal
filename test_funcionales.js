const { describe, it } = require('mocha');
const { expect } = require('chai');
const { sumar } = require('./funtions');



describe('Unit Tests', () => {
  describe('sumar', () => {
    it('should return the sum of two numbers', () => {
      const result = sumar(2, 3);
      expect(result).to.equal(5);
    });
  });

  describe('sumar function valida numeros', () => {
  it('should throw an error when provided with invalid arguments', () => {
    expect(() => sumar('2', 3)).to.throw('Los argumentos deben ser números');
    expect(() => sumar(2, '3')).to.throw('Los argumentos deben ser números');
    expect(() => sumar('2', '3')).to.throw('Los argumentos deben ser números');
    expect(() => sumar({}, 3)).to.throw('Los argumentos deben ser números');
    expect(() => sumar(2, null)).to.throw('Los argumentos deben ser números');
  });
});

  
});

//para ejecutar el test npx mocha test.js