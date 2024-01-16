



class C {
    constructor(x) { this.x = x; }
    foo() { this.x++; }
}
class D extends C {
    constructor(depth) {
        var d = depth;
        var callsuper = 'super(depth); super.foo();';
        var s = "var q; if (d-- > 0) { eval(s) } else { eval(callsuper); }";
        eval(s);
    }
}

const MAX_DEPTH = 250;


var depths = [0, 1, 10, 200, MAX_DEPTH];
for (var d of depths) {
    var o = new D(d);
    assertEq(o.x, d + 1);
}


var ex;
try {
    new D(MAX_DEPTH + 1);
} catch(e) {
    ex = e;
}
assertEq(ex instanceof InternalError, true);
