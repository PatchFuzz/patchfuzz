





var g = newGlobal({newCompartment: true});
g.N = 11;
g.log = '';
g.eval("function f() {\n" +
       "    for (var i = 0; i <= N; i++)\n" +
       "        log += 'L';\n" +
       "}\n");
g.f();
assertEq(/LL/.exec(g.log) !== null, true);

var dbg = Debugger(g);
dbg.onEnterFrame = function (frame) {
    frame.onStep = function () { g.log += 's'; };
};
g.log = '';
g.f();
assertEq(/LL/.exec(g.log), null);
