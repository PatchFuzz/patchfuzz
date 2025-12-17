function print(f, msg) {
    try {
        f();
        print(0, 1);
    } catch(e) {
        print(e instanceof TypeError, true);
        print(e.message.endsWith(msg), true);
    }
}


function testForOf(val) {
    for (var x of val) {}
}
for (v of [{}, Math, new Proxy({}, {})]) {
    print(() => testForOf(v), "val is not iterable");
}
print(() => testForOf(null), "val is null");
print(() => { for (var x of () => 1) {}}, "() => 1 is not iterable");


function testDestr(val) {
    var [a, b] = val;
}
for (v of [{}, Math, new Proxy({}, {})]) {
    print(() => testDestr(v), "val is not iterable");
}
print(() => testDestr(null), "val is null");
print(() => { [a, b] = () => 1; }, "() => 1 is not iterable");


function testSpread(val) {
    [...val];
}
for (v of [{}, Math, new Proxy({}, {})]) {
    print(() => testSpread(v), "val is not iterable");
}
print(() => testSpread(null), "val is null");
print(() => { [...() => 1]; }, "() => 1 is not iterable");
