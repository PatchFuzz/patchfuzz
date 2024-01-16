


























var o = {};
Object.defineProperty(o, "length", { get: function() { throw "bail"; }});
assertThrows("new Int16Array(o);");

var a = [];
Object.defineProperty(a, "0", { get: function() { throw "bail"; }});
assertThrows("new Int16Array(a);");
