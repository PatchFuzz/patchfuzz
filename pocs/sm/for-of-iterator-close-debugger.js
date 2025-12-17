var g = newGlobal({newCompartment: true});
g.parent = this;
g.eval("new Debugger(parent).onExceptionUnwind = function () { };");

for (var x of []) {};
for (var l of [0]) {
    for (var y = 0; y < 1; y++) {
        g2;
    }
}
