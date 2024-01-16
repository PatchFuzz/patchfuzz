





function f() {}
f = f.bind();
f.x = f.name;
f.__defineGetter__('name', function() { return f.x; });
function g() {}
g.prototype = f;
gc();
