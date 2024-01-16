













var g = Array.bind(0, 0, 0, 0)
g.prototype = Array;
class C extends g {}
class D extends C {
    constructor(a, b, c) {
        eval("eval ('super (a, b, c, d)')")

    }
}
var d = new D
assert(d.length === 7);
