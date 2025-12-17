'use strict';

var typedArray = new Int8Array(1);
var saved;
var called;
class TypedArraySubclass extends Int8Array {
  constructor(x) {
    super(x);
    called = true;
    saved = x;
  }
}
typedArray.constructor = TypedArraySubclass
typedArray.map(function(){});

print(called);
print(saved, 1);
