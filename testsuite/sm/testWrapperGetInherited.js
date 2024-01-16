


var g = newGlobal();
var target = {}
var P = new Proxy(target, {
    get(t, id, r) {
        assertEq(t, target);
        assertEq(id, "X");
        assertEq(r, wO);
        return "vega";
    }
});

g.W = P;
g.eval("var O = Object.create(W);");
var wO = g.O;
assertEq(g.eval("O.X"), "vega");
