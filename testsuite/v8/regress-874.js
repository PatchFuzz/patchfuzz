


























var x = { };

var getter = function(){ return 42; };
var setter = function(value){ };
x.__defineGetter__(0, getter);
x.__defineSetter__(0, setter);

assertEquals (undefined, Object.getOwnPropertyDescriptor(x, 0).value);
assertEquals (getter, Object.getOwnPropertyDescriptor(x, 0).get);
assertEquals (setter, Object.getOwnPropertyDescriptor(x, 0).set);
