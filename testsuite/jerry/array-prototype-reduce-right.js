















var func = function(a, b) {
  return a + b;
}


try {
  [0].reduceRight(new Object());
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}


try {
  [].reduceRight(func);
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}

try {
  var a = new Array();
  a.length = 10;
  a.reduceRight(func);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError)
}


assert([].reduceRight(func, 1) === 1);

assert([].reduceRight(func, undefined) === undefined);

assert([0].reduceRight(func) === 0);

assert([0, 1].reduceRight(func) === 1);

assert([0, 1].reduceRight(func, 1) === 2);

assert([0, 1, 2, 3].reduceRight(func, 1) === 7);

assert (["A","B"].reduceRight(func) === "BA");

assert (["A","B"].reduceRight(func, "Init:") === "Init:BA");

assert ([0, 1].reduceRight(func, 3.2) === 4.2);

assert ([0, "x", 1].reduceRight(func) === "1x0");

assert ([0, "x", 1].reduceRight(func, 3.2) === "4.2x0");

var long_array = [0, 1];
assert (long_array.reduceRight(func,10) === 11);

long_array[10000] = 1;
assert (long_array.reduceRight(func,10) === 12);

var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
    accessed = true;
    return typeof prevVal === "undefined";
}

var obj = { 0: 11, length: 1 };

assert (Array.prototype.reduceRight.call(obj, callbackfn, undefined) === true && accessed);
