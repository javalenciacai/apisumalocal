const { describe, it } = require('mocha');
const { expect } = require('chai');
const { sumar } = require('./funtions');

describe('funcion sumar eficiente', () => {
  it('should not take more than 1ms', () => {
    const start = Date.now();
    const result = sumar(2, 3);
    const end = Date.now();
    const executionTime = end - start;

    expect(result).to.equal(5);
    expect(executionTime).to.be.lessThan(1);
  });
});


describe('Función sumar existe', () => {
  it('debería existir la función sumar', () => {
    expect(sumar1).to.exist;
  });
});


describe('Funcion sumar contiene if', () => {
  it('should have an if statement', () => {
    const functionString = sumar.toString();
    expect(functionString).to.include('if (typeof a !== \'number\' || typeof b !== \'number\')');
  });
});
  


