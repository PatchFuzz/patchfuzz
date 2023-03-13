













var obj = [];

Object.defineProperty (obj, "prop", {
    value: 2010,
    writable: true,
    enumerable: true,
    configurable: false
});

print(obj.hasOwnProperty ("prop"));
function getFunc() {
    return 20;
}

try {
    Object.defineProperty (obj, "prop", {
        get: getFunc
    });
    print(false);
} catch (e) {
    print(e instanceof TypeError);
    var desc = Object.getOwnPropertyDescriptor (obj, "prop");
    print(desc.value === 2010);
    print(typeof (desc.get) === 'undefined');
}

obj = {};
var setter = function () {};

Object.defineProperty(obj, "prop", {
    set: setter,
    configurable: true
});

var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

Object.defineProperty(obj, "prop", {
    set: undefined
});

var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");
print(desc1.set === setter && desc2.set === undefined);

obj = {};


Object.defineProperty(obj, 'f', {
  set: function(value) { throw 234; },
});

try {
  obj.f = 5;
  print(false);
} catch (err) {
  print(err === 234);
}

try {
  Object.defineProperty(42, "prop", {
      set: undefined
  });
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}
