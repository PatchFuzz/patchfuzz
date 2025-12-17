;

function f(v) {
    return v.length;
}

function g(v) {
    return v.length;
}

function h(v) {
    return v.length;
}

function aliasCheck(v) {
    v[0] = v.length;
    v[1] = v.length;
    v[2] = v.length;
    return v;
}

for(let i = 41; i; i--) {
    print(f([]), 0);
    print(f([0]), 1);
    print(f([0, 1]), 2);
    print(f([0, 1, 2]), 3);
    print(g(""), 0);
    print(g("1"), 1);
    print(g("12"), 2);
    print(g("123"), 3);
    print(h({}), undefined);
    print(h({a: 1}), undefined);
    print(h({a: 1, b: 2}), undefined);
    print(h({a: 1, b: 2, length: 3}), 3);
    print(arraysEqual(aliasCheck([0, 1, 2]), [3, 3, 3]), true);
}
