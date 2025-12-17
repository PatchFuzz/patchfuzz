;
var o = Object.preventExtensions(new ArrayBuffer);
print(function () { o.__proto__ = {}; }, TypeError);
