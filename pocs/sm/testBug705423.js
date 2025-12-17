gczeal(1);

var g = newGlobal();

g.eval("\
var f = function(x) { \
    arg = arguments; \
    fun = function() { return x }; \
} \
");

g.f(3);
g.f = null;
print(g.fun(), 3);
print(g.arg[0], 3);
gc();
g.arg[0] = 9;
print(g.fun(), 9);
print(g.arg[0], 9);
