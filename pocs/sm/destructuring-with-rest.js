;

function f1(a, bIs, [b], ...rest) {
    print(a, 1);
    print(bIs, b);
    print(rest, []);
}
print(f1.length, 3);
f1(1, 3, [3]);
f1(1, 42, [42]);

function f2([a], ...rest) {
    print(a, undefined);
}
f2([]);

function f3([a], ...rest) {
    print(a, 1);
    print(rest, [2, 3, 4]);
}
f3([1], 2, 3, 4);
