;

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hits = 0;
g.h = function () {
    var env = dbg.getNewestFrame().environment;
    print(function () { env.find(); }, TypeError);
    print(function () { env.find(""); }, TypeError);
    print(function () { env.find(" "); }, TypeError);
    print(function () { env.find(0); }, TypeError);
    print(function () { env.find("0"); }, TypeError);
    print(function () { env.find("0xc"); }, TypeError);
    print(function () { env.find("Anna Karenina"); }, TypeError);
    hits++;
};
g.eval("h();");
g.eval("with ([1]) h();");
print(hits, 2);
