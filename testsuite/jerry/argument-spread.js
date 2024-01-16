















function mustThrow(str) {
  try {
    eval(str);
    assert(false);
  } catch (e) {
    assert(e instanceof TypeError);
  }
}

function assertArrayEqual(actual, expected) {
  assert(actual.length === expected.length);

  for (var i = 0; i < actual.length; i++) {
    assert(actual[i] === expected[i]);
  }
}


function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

assert(sum(...numbers) === 6);


function myFunction (v, w, x, y, z) {
  return v + w + x + y + z;
}
var args = [0, 1];

assert(myFunction (-1, ...args, 2, ...[3]) == 5);


var dateFields = [1970, 0, 1];
var d = new Date(...dateFields);

assert(d.toString().substring(0, 24) === "Thu Jan 01 1970 00:00:00");

function applyAndNew(constructor, args) {
   function partial () {
      return constructor.apply (this, args);
   };
   if (typeof constructor.prototype === "object") {
      partial.prototype = Object.create(constructor.prototype);
   }
   return partial;
}

function myConstructor () {
   assertArrayEqual(arguments, myArguments);
   this.prop1 = "val1";
   this.prop2 = "val2";
};

var myArguments = ["hi", "how", "are", "you", "mr", null];
var myConstructorWithArguments = applyAndNew(myConstructor, myArguments);

var obj = new myConstructorWithArguments;
assert(Object.keys(obj).length === 2);
assert(obj.prop1 === "val1");
assert(obj.prop2 === "val2");


var o = { f(a,b,c) { return a + b + c },
          g(a,b) { throw new TypeError ("5") }
        };

assert (o.f(...["a", "b", "c"]) === "abc");

mustThrow ("o.g (...[1,2])")


class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }
}

var array = new MyArray(1, 2, 3);
assertArrayEqual(array, [1,2,3]);
assert(array instanceof MyArray);
assert(array instanceof Array);

function argumentOrderTest() {
  var result = []
  for (i = 0; i < arguments.length; i++) {
      result.push(arguments[i]);
  }

  return result;
}

assertArrayEqual(argumentOrderTest(1, 2, ...[3, 4]), [1, 2, 3, 4]);
