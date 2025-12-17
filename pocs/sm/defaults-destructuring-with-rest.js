;
;

function f1(a, bIs, [b]=[3], ...rest) {
    print(a, 1);
    print(bIs, b);
    print(rest, []);
}
print(f1.length, 2);
f1(1, 3);
f1(1, 42, [42]);

function f2([a]=[rest], ...rest) {
    print(a, undefined);
}

print(f2, ReferenceError);

function f3([a]=[rest], ...rest) {
    print(a, 1);
    print(rest, [2, 3, 4]);
}

print(f3, ReferenceError);

function f4([a]=rest, ...rest) {
}

print(f4, ReferenceError);
