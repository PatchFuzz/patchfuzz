













var Base = function() {}.bind();
Object.defineProperty(Base, 'prototype', {
    get: function() {
        return Int8Array + Function
    }
});

try {
  class C extends Base {}
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}
