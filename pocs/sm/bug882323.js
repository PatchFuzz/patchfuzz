var ints = new Int8Array(16);
ints[0] = 42;
function intElementAt(index) {
    return ints[index];
}
print(intElementAt(16), undefined);
print(intElementAt(0), 42);

var floats = new Float64Array(16);
floats[0] = 3.14;
function floatElementAt(index) {
    return floats[index];
}
print(floatElementAt(16), undefined);
print(floatElementAt(0), 3.14);

var uints = new Uint32Array(16);
uints[0] = 123;
function uintElementAt(index) {
    return uints[index];
}
print(uintElementAt(16), undefined);
print(uintElementAt(0), 123);
