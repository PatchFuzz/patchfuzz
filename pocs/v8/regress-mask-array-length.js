var a = [];
var o = {
  __proto__: a
};
Object.preventExtensions(o);
o.length = 'abc';
