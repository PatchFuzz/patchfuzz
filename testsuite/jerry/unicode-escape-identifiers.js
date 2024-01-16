













var \u{102C0} = 2;
assert(\u{102C0} === 2);

var o1 = { \u{102C0} : 3 };
assert(o1['\ud800\udec0'] === 3);

var o2 = { '\ud800\udec0' : 4 };
assert(o2.\u{102C0} === 4);

try {
  eval('var ⸯ');
  assert(false);
} catch(e) {
  assert(e instanceof SyntaxError);
}

var 𐋀 = 5;
assert(𐋀 === 5);
