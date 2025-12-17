for (var i = 0; i < 9; i++)
    print(Symbol() ? 1 : 0, 1, "symbols are truthy");

var a = [0, 0, 0, 0, 0, Symbol(), Symbol()];
var b = [];
function f(i, v) {
    b[i] = v ? "yes" : "no";
}
for (var i = 0; i < a.length; i++)
    f(i, a[i]);
print(b[b.length - 3], "no");
print(b[b.length - 2], "yes");
print(b[b.length - 1], "yes");
