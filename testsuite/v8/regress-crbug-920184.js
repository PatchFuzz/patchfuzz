





var Ctor = function() {
  return [];
};
var a = ["one", "two", "three"];
a.constructor = {};
a.constructor[Symbol.species] = Ctor;

a.filter(function() { return true; });
