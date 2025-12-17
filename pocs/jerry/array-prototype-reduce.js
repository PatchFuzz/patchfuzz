var func = function(a, b) {
  return a + b;
}


try {
  [0].reduce(new Object());
  assert(false);
}
catch(e) {
  assert(e instanceof TypeError);
}


try {
  [].reduce(func);
  assert(false);
}
catch(e) {
  assert(e instanceof TypeError);
}


assert ([].reduce(func, 1) === 1);

assert ([].reduce(func, undefined) === undefined);

assert ([0].reduce(func) === 0);

assert ([0, 1].reduce(func) === 1);

assert ([0, 1].reduce(func, 1) === 2);

assert ([0, 1, 2, 3].reduce(func, 1) === 7);

assert (["A","B"].reduce(func) === "AB");

assert (["A","B"].reduce(func, "Init:") === "Init:AB");

assert ([0, 1].reduce(func, 3.2) === 4.2);

assert ([0, "x", 1].reduce(func) === "0x1");

assert ([0, "x", 1].reduce(func, 3.2) === "3.2x1");

var long_array = [0, 1];
assert (long_array.reduce(func,10) === 11);

long_array[10000] = 1;
assert (long_array.reduce(func,10) === 12);

var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
    accessed = true;
    return typeof prevVal === "undefined";
}

var obj = { 0: 11, length: 1 };

assert (Array.prototype.reduce.call(obj, callbackfn, undefined) === true && accessed);
