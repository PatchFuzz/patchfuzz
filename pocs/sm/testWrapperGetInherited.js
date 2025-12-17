var g = newGlobal();
var target = {}
var P = new Proxy(target, {
    get(t, id, r) {
        print(t, target);
        print(id, "X");
        print(r, wO);
        return "vega";
    }
});

g.W = P;
g.eval("var O = Object.create(W);");
var wO = g.O;
print(g.eval("O.X"), "vega");
