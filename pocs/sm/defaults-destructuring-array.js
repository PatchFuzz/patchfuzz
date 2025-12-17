function f1(a, bIs, [b]=[3]) {
    print(a, 1);
    print(b, bIs);
}
print(f1.length, 2);
f1(1, 3);
f1(1, 42, [42]);
f1(1, 3, undefined);

function f2(a, bIs, [b]=[]) {
    print(a, 1);
    print(b, bIs);
}
print(f2.length, 2);
f2(1, undefined);
f2(1, 42, [42]);
f2(1, undefined, undefined);
