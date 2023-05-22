function sumar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Los argumentos deben ser números');
  }
  return a + b;
}


module.exports = { sumar };