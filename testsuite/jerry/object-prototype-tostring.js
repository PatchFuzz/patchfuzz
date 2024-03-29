














assert (Symbol.prototype[Symbol.toStringTag] === "Symbol");
assert (Object.prototype.toString.call (Symbol ()) === "[object Symbol]");

assert (delete Symbol.prototype[Symbol.toStringTag]);
assert (Symbol.prototype[Symbol.toStringTag] === undefined);
Symbol.prototype[Symbol.toStringTag] = "myStringTag1";
assert (Object.prototype.toString.call (Symbol ()) === "[object myStringTag1]");
Symbol.prototype[Symbol.toStringTag] = {};
assert (Object.prototype.toString.call (Symbol ()) === "[object Object]");


assert (Math[Symbol.toStringTag] === "Math");
assert (Object.prototype.toString.call (Math) === "[object Math]");

assert (delete Math[Symbol.toStringTag]);
assert (Math[Symbol.toStringTag] === undefined);
Math[Symbol.toStringTag] = "myStringTag2";
assert (Object.prototype.toString.call (Math) === "[object myStringTag2]");
Math[Symbol.toStringTag] = {};
assert (Object.prototype.toString.call (Math) === "[object Object]");


assert (ArrayBuffer.prototype[Symbol.toStringTag] === "ArrayBuffer");
assert (Object.prototype.toString.call (new ArrayBuffer ()) === "[object ArrayBuffer]");

assert (delete ArrayBuffer.prototype[Symbol.toStringTag]);
assert (ArrayBuffer.prototype[Symbol.toStringTag] === undefined);
ArrayBuffer.prototype[Symbol.toStringTag] = "myStringTag3";
assert (Object.prototype.toString.call (new ArrayBuffer ()) === "[object myStringTag3]");
ArrayBuffer.prototype[Symbol.toStringTag] = {};
assert (ArrayBuffer.prototype.toString.call (new ArrayBuffer ()) === "[object Object]");


assert (SharedArrayBuffer.prototype[Symbol.toStringTag] === "SharedArrayBuffer");
assert (Object.prototype.toString.call (new SharedArrayBuffer ()) === "[object SharedArrayBuffer]");

assert (delete SharedArrayBuffer.prototype[Symbol.toStringTag]);
assert (SharedArrayBuffer.prototype[Symbol.toStringTag] === undefined);
SharedArrayBuffer.prototype[Symbol.toStringTag] = "myStringTag3";
assert (Object.prototype.toString.call (new SharedArrayBuffer ()) === "[object myStringTag3]");
SharedArrayBuffer.prototype[Symbol.toStringTag] = {};
assert (SharedArrayBuffer.prototype.toString.call (new SharedArrayBuffer ()) === "[object Object]");


assert (Promise.prototype[Symbol.toStringTag] === "Promise");
assert (Object.prototype.toString.call (new Promise (function () {})) === "[object Promise]");

assert (delete Promise.prototype[Symbol.toStringTag]);
assert (Promise.prototype[Symbol.toStringTag] === undefined);
Promise.prototype[Symbol.toStringTag] = "myStringTag4";
assert (Object.prototype.toString.call (new Promise (function () {})) === "[object myStringTag4]");
Promise.prototype[Symbol.toStringTag] = {};
assert (Promise.prototype.toString.call (new Promise (function () {})) === "[object Object]");


assert (Map.prototype[Symbol.toStringTag] === "Map");
assert (Object.prototype.toString.call (new Map ()) === "[object Map]");
assert (Object.prototype.toString.call (Map) === "[object Function]");

assert (delete Map.prototype[Symbol.toStringTag]);
assert (Map.prototype[Symbol.toStringTag] === undefined);
Map.prototype[Symbol.toStringTag] = "myStringTag5";
assert (Map.prototype.toString.call (new Map ()) === "[object myStringTag5]");
assert (Object.prototype.toString.call (Map) === "[object Function]");
Map.prototype[Symbol.toStringTag] = {};
assert (Map.prototype.toString.call (new Map) === "[object Object]");


assert (JSON[Symbol.toStringTag] === "JSON");
assert (Object.prototype.toString.call (JSON) === "[object JSON]");

assert (delete JSON[Symbol.toStringTag]);
assert (JSON[Symbol.toStringTag] === undefined);
JSON[Symbol.toStringTag] = "myStringTag6";
assert (Map.prototype.toString.call (JSON) === "[object myStringTag6]");
JSON[Symbol.toStringTag] = {};
assert (Object.prototype.toString.call (JSON) === "[object Object]");

var typedArrayTypes = ["Int8Array",
                       "Uint8Array",
                       "Uint8ClampedArray",
                       "Int16Array",
                       "Uint16Array",
                       "Int32Array",
                       "Uint32Array",
                       "Float32Array",
                       "Float64Array"];

for (var i = 0; i < typedArrayTypes.length; i++) {
  var typedArray = this[typedArrayTypes[i]];
  assert (typedArray.prototype[Symbol.toStringTag] === undefined);
  assert (Object.prototype.toString.call (typedArray) === "[object Function]");
  assert (Object.prototype.toString.call (typedArray.prototype) === "[object Object]");

  var newArray = new typedArray ();
  assert (newArray[Symbol.toStringTag] === typedArrayTypes[i]);
  assert (Object.prototype.toString.call (newArray) === "[object " + typedArrayTypes[i] + "]");
}
