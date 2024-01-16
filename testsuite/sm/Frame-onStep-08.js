

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var log = '';
dbg.onEnterFrame = function (frame) {
    var handler = {hit: function () { log += 'B'; }};
    var lines = frame.script.getAllOffsets();
    for (var line in lines) {
        line = Number(line);
        var offs = lines[line];
        for (var i = 0; i < offs.length; i++)
            frame.script.setBreakpoint(offs[i], handler);
    }

    frame.onStep = function () { log += 's'; };
};

g.eval("one = 1;\n" +
       "two = 2;\n" +
       "three = 3;\n" +
       "four = 4;\n");
assertEq(g.four, 4);


assertEq(log.replace(/[^B]/g, ''), 'BBBBB');


assertEq(/BB/.exec(log), null);
