function g() { }
var f = g.bind();
f.__defineGetter__('length', g);
gc();
