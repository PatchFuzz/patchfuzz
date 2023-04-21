















var func = function(a, b) {
  return a + b;
}


try {
  [0].reduceRight(new Object());
  print(false);
} catch(e) {
  print(e instanceof TypeError);
}


try {
  [].reduceRight(func);
  print(false);
} catch(e) {
  print(e instanceof TypeError);
}

try {
  var a = new Array();
  a.length = 10;
  a.reduceRight(func);
  print(false);
} catch (e) {
  print(e instanceof TypeError)
}


print([].reduceRight(func, 1) === 1);

print([].reduceRight(func, undefined) === undefined);

print([0].reduceRight(func) === 0);

print([0, 1].reduceRight(func) === 1);

print([0, 1].reduceRight(func, 1) === 2);

print([0, 1, 2, 3].reduceRight(func, 1) === 7);

print(["A","B"].reduceRight(func) === "BA");

print(["A","B"].reduceRight(func, "Init:") === "Init:BA");

print([0, 1].reduceRight(func, 3.2) === 4.2);

print([0, "x", 1].reduceRight(func) === "1x0");

print([0, "x", 1].reduceRight(func, 3.2) === "4.2x0");

var long_array = [0, 1];
print(long_array.reduceRight(func,10) === 11);

long_array[10000] = 1;
print(long_array.reduceRight(func,10) === 12);

var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
    accessed = true;
    return typeof prevVal === "undefined";
}

var obj = { 0: 11, length: 1 };

print(Array.prototype.reduceRight.call(obj, callbackfn, undefined) === true && accessed);
