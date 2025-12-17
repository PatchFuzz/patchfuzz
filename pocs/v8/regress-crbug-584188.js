var x = {};
try {
Object.defineProperty(String.prototype, "3", { x: function() { x = v; }});
string = "bla";
} catch(e) {; }
print("Array.prototype.sort.call(string);", TypeError);
