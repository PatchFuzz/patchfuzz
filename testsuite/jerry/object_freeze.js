













var obj = {
  prop: function() {},
  foo: 'bar'
};


obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

var o = Object.freeze(obj);

assert(Object.isFrozen(obj) === true);


obj.foo = 'quux'; 
assert (obj.foo === 'baz');

obj.quaxxor = 'the friendly duck'; 
assert (obj.quaxxor === undefined);


function fail(){
  'use strict';

  try {
    obj.foo = 'sparky'; 
    assert (false);
  } catch (e) {
    assert (e instanceof TypeError);
  }

  try {
    delete obj.foo; 
    assert (false);
  } catch (e) {
    assert (e instanceof TypeError);
  }

  try {
    obj.sparky = 'arf'; 
    assert (false);
  } catch (e) {
    assert (e instanceof TypeError);
  }
}

fail();



try {
  Object.defineProperty(obj, 'ohai', { value: 17 }); 
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  Object.defineProperty(obj, 'foo', { value: 'eit' }); 
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}
