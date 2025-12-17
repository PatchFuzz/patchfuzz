;

function die() { throw "x"; }
var ok = true;
function f(a = die()) { ok = false; }
print(f, "x");
