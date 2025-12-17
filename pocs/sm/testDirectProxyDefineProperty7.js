;

var input, output;
var p = new Proxy({x: 0}, {
    defineProperty(t, k, desc) { output = desc; print("ok"); return true; }
});

input = {get: function () {}};
Object.defineProperty(p, "x", input);
print(output, input);

input = {set: function () {}};
Object.defineProperty(p, "x", input);
print(output, input);
