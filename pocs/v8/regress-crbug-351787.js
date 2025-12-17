var ab1 = new ArrayBuffer(8);
ab1.__defineGetter__("byteLength", function() { return 1000000; });
var ab2 = ab1.slice(800000, 900000);
var array = new Uint8Array(ab2);
for (var i = 0; i < array.length; i++) {
  print(0, array[i]);
}
print(0, array.length);


var ab3 = new ArrayBuffer(8);
ab3.__defineGetter__("byteLength", function() { return 0xFFFFFFFC; });
var aaa = new DataView(ab3);

for (var i = 10; i < aaa.length; i++) {
  aaa.setInt8(i, 0xcc);
}
print(8, aaa.byteLength);


var a = new Int8Array(4);
a.__defineGetter__("length", function() { return 0xFFFF; });
var b = new Int8Array(a);
for (var i = 0; i < b.length; i++) {
  print(0, b[i]);
}


var ab4 = new ArrayBuffer(8);
ab4.__defineGetter__("byteLength", function() { return 0xFFFFFFFC; });
var aaaa = new Uint32Array(ab4);

for (var i = 10; i < aaaa.length; i++) {
  aaaa[i] = 0xcccccccc;
}
print(2, aaaa.length);
