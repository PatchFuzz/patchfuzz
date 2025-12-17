function print(a, e, m) {
    if (a !== e)
        throw new Error(m);
}

function print(a, e) {
    print(a.length, e.length, "Size of arrays doesn't match");
    for (var i = 0; i < a.length; i++)
        print(a[i], e[i], "a[" + i + "] = " + a[i] + " but e[" + i + "] = " + e[i]);
}

let obj1 = { };
let array1 = [ ];

let set1 = new Set([1]);
let set2 = new Set([2, 1]);
let set3 = new Set([3, 1]);
let set4 = new Set([1, 2, 3]);
let set5 = new Set([obj1, array1, set1, 3, 1]);
let set6 = new Set([obj1, array1, set1]);
let map1 = new Map([["a", 1], ["b", 2], [obj1, array1]]);
let map2 = new Map([[3, 1], [1, 2]]);

print(set1.isDisjointFrom(set2), false);
print(set2.isDisjointFrom(set1), false);
print(set1.isDisjointFrom(set3), false);
print(set3.isDisjointFrom(set1), false);
print(set3.isDisjointFrom(set2), false);
print(set2.isDisjointFrom(set3), false);
print(set4.isDisjointFrom(set3), false);
print(set2.isDisjointFrom(set4), false);
print(set2.isDisjointFrom(set5), false);
print(set3.isDisjointFrom(set5), false);
print(set5.isDisjointFrom(set3), false);

print(set1.isDisjointFrom(set6), true);
print(set6.isDisjointFrom(set1), true);
print(set4.isDisjointFrom(set6), true);
print(set6.isDisjointFrom(set4), true);

print(set3.isDisjointFrom(map1), true);
print(set3.isDisjointFrom(map2), false);

try {
    
    set1.isDisjointFrom(1);
} catch (e) {
    if (e != "TypeError: Set operation expects first argument to be an object")
        throw e;
}

try {
    set1.isDisjointFrom({ });
} catch (e) {
    if (e != "TypeError: Set operation expects first argument to have non-NaN 'size' property")
        throw e;
}

try {
    set1.isDisjointFrom({ size:NaN });
} catch (e) {
    if (e != "TypeError: Set operation expects first argument to have non-NaN 'size' property")
        throw e;
}

try {
    set1.isDisjointFrom({ size: -30 });
} catch (e) {
    if (e != "RangeError: Set operation expects first argument to have non-negative 'size' property")
        throw e;
}

try {
    set1.isDisjointFrom({ size:1 });
} catch (e) {
    if (e != "TypeError: Set.prototype.isDisjointFrom expects other.has to be callable")
        throw e;
}

try {
    set1.isDisjointFrom({ size:1, has(v) { return v == 1; } });
} catch (e) {
    if (e != "TypeError: Set.prototype.isDisjointFrom expects other.keys to be callable")
        throw e;
}

let error = new Error();
try {
    set1.isDisjointFrom({ size:1, has(v) { return v == 1; }, keys() { throw error } });
} catch (e) {
    if (e != error)
        throw e;
}

print(set1.isDisjointFrom({ size:1, has(v) { return set1.has(v); }, keys() { print(arguments.length, 0, "keys() arguments.length"); return set1.keys() } }), false);
print(set4.isDisjointFrom({ size:1, has(v) { return set1.has(v); }, keys() { print(arguments.length, 0, "keys() arguments.length"); return set1.keys() } }), false);
print(set6.isDisjointFrom({ size:1, has(v) { return set1.has(v); }, keys() { print(arguments.length, 0, "keys() arguments.length"); return set1.keys() } }), true);
