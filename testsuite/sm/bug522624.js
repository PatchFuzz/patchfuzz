




function r([]) { r(); }
var a = {};
a.__defineGetter__("t", r);
try { a.t; } catch(e) { }
print(uneval(a));
