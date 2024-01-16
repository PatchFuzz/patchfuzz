














var array1 = Array.of(1, 2, 3, 4, 5);
assert(array1.length === 5);
assert(array1[2] === 3);


var array2 = Array.of();
assert(array2.length === 0);
assert(array2[0] === undefined);


var array3 = Array.of(array1, 6, 7);
assert(array3.length === 3);
assert(array3[0] instanceof Array);
assert(array3[0][3] === 4);
assert(array3[2] === 7);


var array4 = Array.of(undefined);
assert(array4.length === 1);
assert(array4[0] === undefined);


var obj = {
  0: 0,
  1: 1
};

var array5 = Array.of(obj, 2, 3);
assert(array5[0] instanceof Object);
assert(array5[0][0] === 0);
assert(array5[0][1] === 1);
assert(array5[2] === 3);


var array6 = Array.of.apply(null, [,,undefined]);
assert(array6.length === 3);
assert(array6[0] === undefined);


var hits = 0;
function Test() {
    hits++;
}
Test.of = Array.of;

hits = 0;
var array6 = Test.of(1, 2);
assert(hits === 1);
assert(array6.length === 2);
assert(array6[1] === 2);


var boundedBuiltinFn = Array.of.bind(Array);
var array7 = Array.of.call(boundedBuiltinFn, boundedBuiltinFn);
assert(array7.length === 1);
assert(array7[0] === boundedBuiltinFn);


var desc = Object.getOwnPropertyDescriptor(Array, "of");
assert(desc.configurable === true);
assert(desc.writable === true);
assert(desc.enumerable === false);
assert(Array.of.length === 0);
