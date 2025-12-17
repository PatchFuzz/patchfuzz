function print(obj1, obj2) {
    print(obj1.a, obj2.a);
    print(obj1.b, obj2.b);
    print(obj1.c, obj2.c);
    print(obj1.d, obj2.d);
    print(obj2.a, 1);
    print(obj2.b, "bee");
    print(obj2.c, "crab");
    print(obj2.d, 12);
}

function forName(obj) {
    eval('');
    var r = { };
    for (x in obj)
        r[x] = obj[x];
    return r;
}

function forGlobalName(obj) {
    var r = { };
    for (x in obj)
        r[x] = obj[x];
    return r;
}

function forProp(obj) {
    var r = { };
    var c = { };
    for (c.x in obj)
        r[c.x] = obj[c.x];
    return r;
}

function forElem(obj, x) {
    var r = { };
    var c = { };
    for (c[x] in obj)
        r[c[x]] = obj[c[x]];
    return r;
}

function forLocal(obj) {
    var r = { };
    for (var x in obj)
        r[x] = obj[x];
    return r;
}

function forArg(obj, x) {
    var r = { };
    for (x in obj)
        r[x] = obj[x];
    return r;
}

var obj = { a: 1, b: "bee", c: "crab", d: 12 };
print(obj, forName(obj));
print(obj, forGlobalName(obj));
print(obj, forProp(obj));
print(obj, forElem(obj, "v"));
print(obj, forLocal(obj));
print(obj, forArg(obj));

