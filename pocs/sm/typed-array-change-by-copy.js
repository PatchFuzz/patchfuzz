;
;

let typedArray123 = new Uint8Array([1, 2, 3]);
let typedArray12345 = new Uint8Array([1, 2, 3, 4, 5]);
let typedArray = new Uint8Array([1, 2, 3]);
let typedArray2 = new Uint8Array([3, 2, 1]);

let a_with = typedArray.with(1, 42);
print(arraysEqual(typedArray, new Uint8Array([1, 2, 3])), true);
print(arraysEqual(a_with, new Uint8Array([1, 42, 3])), true);

let tarray1 = new Uint8Array([42, 2, 3]);
let tarray2 = new Uint8Array([1, 2, 42]);

print(arraysEqual(typedArray.with(-0, 42), tarray1), true);


print(arraysEqual(typedArray.with(null, 42), tarray1), true);

print(arraysEqual(typedArray.with([], 42), tarray1), true);

print(arraysEqual(typedArray.with("2", 42), tarray2), true);


print(arraysEqual(typedArray.with("monkeys", 42), tarray1), true);
print(arraysEqual(typedArray.with(undefined, 42), tarray1), true);
print(arraysEqual(typedArray.with(function() {}, 42), tarray1), true);

print(() => typedArray.with(3, 42), RangeError);
print(() => typedArray.with(5, 42), RangeError);
print(() => typedArray.with(-10, 42), RangeError);
print(() => typedArray.with(Infinity, 42), RangeError);

let reversedIntArray = typedArray.toReversed();
print(arraysEqual(typedArray, typedArray123), true);
print(arraysEqual(reversedIntArray, typedArray2), true);

let sortedIntArray = typedArray2.toSorted();
print(arraysEqual(typedArray2, new Uint8Array([3, 2, 1])), true);
print(arraysEqual(sortedIntArray, typedArray), true);
