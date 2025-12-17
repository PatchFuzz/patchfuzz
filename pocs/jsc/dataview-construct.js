function print(condition) {
    if (!condition)
        throw new Error("Bad assertion");
}

function shouldThrow(func, message) {
    var errorThrown = false;
    var error = null;
    try {
        func();
    } catch (e) {
        errorThrown = true;
        error = e;
    }
    if (!errorThrown)
        throw new Error('not thrown');
    if (String(error) !== message)
        throw new Error("bad error: " + String(error));
}

var buffer = new ArrayBuffer(128);
var dataView = null;

dataView = new DataView(buffer);
print(dataView.byteOffset === 0);
print(dataView.byteLength === 128);

dataView = new DataView(buffer, undefined);
print(dataView.byteOffset === 0);
print(dataView.byteLength === 128);

dataView = new DataView(buffer, 10);
print(dataView.byteOffset === 10);
print(dataView.byteLength === 118);

dataView = new DataView(buffer, 10, undefined);
print(dataView.byteOffset === 10);
print(dataView.byteLength === 118);

dataView = new DataView(buffer, 10, 20);
print(dataView.byteOffset === 10);
print(dataView.byteLength === 20);

print(new DataView(buffer, 10).byteLength === new DataView(buffer, 10, undefined).byteLength);

shouldThrow(() => {
    new DataView;
}, "TypeError: DataView constructor requires at least one argument.");

shouldThrow(() => {
    new DataView(1);
}, "TypeError: Expected ArrayBuffer for the first argument.");

shouldThrow(() => {
    new DataView(buffer, 256);
}, "RangeError: byteOffset exceeds source ArrayBuffer byteLength");

shouldThrow(() => {
    new DataView(buffer, -1);
}, "RangeError: byteOffset cannot be negative");

shouldThrow(() => {
    new DataView(buffer, Infinity);
}, "RangeError: byteOffset larger than (2 ** 53) - 1");

shouldThrow(() => {
    new DataView(buffer, 0, 256);
}, "RangeError: Length out of range of buffer");

shouldThrow(() => {
    new DataView(buffer, 0, -1);
}, "RangeError: byteLength cannot be negative");

shouldThrow(() => {
    new DataView(buffer, 0, Infinity);
}, "RangeError: byteLength larger than (2 ** 53) - 1");
