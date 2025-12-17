var list = [
    [1, 1, true],
    [0, 1, false],
    [3.5, 3.5, true],
    [0, 0, true],
    [0, -0, false],
    [-0, 0, false],
    [-0, -0, true],

    [true, true, true],
    [true, false, false],
    [false, false, true],

    [NaN, NaN, true],
    [NaN, undefined, false],
    [Infinity, -Infinity, false],
    [Infinity, Infinity, true],
]

for (var test of list) {
    print(Object.is(test[0], test[1]), test[2])
}

var obj = {}
print(Object.is(obj, obj), true);
print(Object.is(obj, {}), false);
print(Object.is([], []), false);

print(Object.is(null, null, null), true);


print(Object.is(null), false);
print(Object.is(undefined), true);
print(Object.is(), true);

print(Object.is.length, 2);
