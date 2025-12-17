;

let {object: target, transplant} = transplantableObject(options);
let otherGlobal = newGlobal({newCompartment: true});

var returnValue = 42;
var handler = {
  get(t, p) {
    if (returnValue != 42) {
      transplant(otherGlobal);
      Object.defineProperty(target, "x", {
        value: 42,
        writable: false,
        configurable: false,
      });
    }
    return returnValue;
  }
};
var proxy = new Proxy(target, handler);

function testGet(p) {
  return p.x;
}

for (i = 0; i < 200; i++) {
  print(testGet(proxy), returnValue);
}

returnValue = 43;
print(function () { testGet(proxy) }, TypeError);
