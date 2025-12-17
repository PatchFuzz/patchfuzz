Object.prototype.get = function() {};
var x = {};
var setter = function () {};
x.__defineSetter__("a", setter);
var desc = Object.getOwnPropertyDescriptor(x, "a");
print(desc.get, undefined);
print(desc.set, setter);
delete Object.prototype.get;

Object.prototype.set = function() {};
x = {};
var getter = function () {};
x.__defineGetter__("a", getter);
desc = Object.getOwnPropertyDescriptor(x, "a");
print(desc.set, undefined);
print(desc.get, getter);
