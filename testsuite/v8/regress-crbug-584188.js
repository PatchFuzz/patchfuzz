



var x = {};
try {
Object.defineProperty(String.prototype, "3", { x: function() { x = v; }});
string = "bla";
} catch(e) {; }
assertThrows("Array.prototype.sort.call(string);", TypeError);
