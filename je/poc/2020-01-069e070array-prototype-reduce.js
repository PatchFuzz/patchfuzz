















var func = function(a, b) {
  return a + b;
}


try {
  [0].reduce(new Object());
  print(false);
}
catch(e) {
  print(e instanceof TypeError);
}


try {
  [].reduce(func);
  print(false);
}
catch(e) {
  print(e instanceof TypeError);
}


print([].reduce(func, 1) === 1);

print([].reduce(func, undefined) === undefined);

print([0].reduce(func) === 0);

print([0, 1].reduce(func) === 1);

print([0, 1].reduce(func, 1) === 2);

print([0, 1, 2, 3].reduce(func, 1) === 7);

print(["A","B"].reduce(func) === "AB");

print(["A","B"].reduce(func, "Init:") === "Init:AB");

print([0, 1].reduce(func, 3.2) === 4.2);

print([0, "x", 1].reduce(func) === "0x1");

print([0, "x", 1].reduce(func, 3.2) === "3.2x1");

var long_array = [0, 1];
print(long_array.reduce(func,10) === 11);

long_array[10000] = 1;
print(long_array.reduce(func,10) === 12);

var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
    accessed = true;
    return typeof prevVal === "undefined";
}

var obj = { 0: 11, length: 1 };

print(Array.prototype.reduce.call(obj, callbackfn, undefined) === true && accessed);
