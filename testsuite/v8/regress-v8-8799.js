






var f = (x) => eval`a${x}b`;
var a = f();
gc();
assertSame(a, f());
