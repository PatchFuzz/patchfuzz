function getter() { return 1; }
function setter() { }
function getDescriptor(target, name) {
  if (name != 'prop')
    throw "Unknown property: " + name;
  return { configurable: true, enumerable: true, get: getter, set: setter };
}
var handler = {
  getOwnPropertyDescriptor: getDescriptor,
};


var proxy = new Proxy({}, handler);
assertEq(Object.prototype.__lookupGetter__.call(proxy, 'prop'), getter);
assertEq(Object.prototype.__lookupSetter__.call(proxy, 'prop'), setter);
