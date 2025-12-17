;

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hits;
dbg.onDebuggerStatement = function (frame) {
    print(frame.script.getOffsetLocation(frame.offset).lineNumber, g.line);
    print(function () { frame.script.getOffsetLocation(String(frame.offset)).lineNumber; }, Error);
    print(function () { frame.script.getOffsetLocation(Object(frame.offset)).lineNumber; }, Error);

    print(function () { frame.script.getOffsetLocation(-1).lineNumber; }, Error);
    print(function () { frame.script.getOffsetLocation(1000000).lineNumber; }, Error);
    print(function () { frame.script.getOffsetLocation(0.25).lineNumber; }, Error);
    print(function () { frame.script.getOffsetLocation(+Infinity).lineNumber; }, Error);
    print(function () { frame.script.getOffsetLocation(-Infinity).lineNumber; }, Error);
    print(function () { frame.script.getOffsetLocation(NaN).lineNumber; }, Error);

    print(function () { frame.script.getOffsetLocation(false).lineNumber; }, Error);
    print(function () { frame.script.getOffsetLocation(true).lineNumber; }, Error);
    print(function () { frame.script.getOffsetLocation(undefined).lineNumber; }, Error);
    print(function () { frame.script.getOffsetLocation().lineNumber; }, Error);

    
    print(
        function () {
            for (var i = 0; i < frame.offset; i++)
                frame.script.getOffsetLocation(i).lineNumber;
        },
        Error);

    hits++;
};

hits = 0;
g.eval("var line = new Error().lineNumber; debugger;");
