













var obj = {
  prop: function() {},
  foo: 'bar'
};

obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

var o = Object.seal(obj);

assert (o === obj);
assert (Object.isSealed (obj) === true);


obj.foo = 'quux';
assert (obj.foo === 'quux');

try {
    Object.defineProperty(obj, 'foo', { get: function() { return 42; } }); 
    assert (false);
} catch (e) {
    assert (e instanceof TypeError);
}


obj.quaxxor = 'the friendly duck'; 
delete obj.foo; 

assert (obj.quaxxor === undefined);
assert (obj.foo === 'quux')

try {
    
    Object.defineProperty (obj, 'ohai', { value: 17 }); 
    assert (false);
} catch (e) {
    assert (e instanceof TypeError);
}

try {
    Object.defineProperties (obj, { 'ohai' : { value: 17 } });
    assert (false);
} catch (e) {
    assert (e instanceof TypeError);
}

Object.defineProperty (obj, 'foo', { value: 'eit' });
assert (obj.foo === 'eit')


var empty = {};
assert (Object.isSealed (empty) === false);


Object.preventExtensions (empty);
assert (Object.isSealed (empty) === true);


var hasProp = { fee: 'fie foe fum' };
Object.preventExtensions (hasProp);
assert (Object.isSealed (hasProp) === false);


Object.defineProperty (hasProp, 'fee', { configurable: false });
assert (Object.isSealed (hasProp) === true);


var sealed = {};
Object.seal (sealed);
assert (Object.isSealed (sealed) === true);
