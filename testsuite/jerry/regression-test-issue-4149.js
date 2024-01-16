













let x;
try {
  (0,eval)('var x');
  assert(false)
} catch (e) {
  assert(e instanceof SyntaxError)
}

(0,eval)('function x() {};');

