function read(a, index, expected) {
    for (var i = 0; i < 1; i++) {
        a[index + 10];
        print(a[index], expected);
    }
}
var a = new Int8Array(11);
a[0] = 5;
for (var i = 0; i < 100; i++) {
    read(a, 0, 5);
}
for (var i = -1; i > -10; --i) {
    read(a, i, undefined);
}
