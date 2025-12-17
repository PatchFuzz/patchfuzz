function f(x) { arguments; return x() + x(); }

print("hesthest", f(function () { return "hest"; }));
