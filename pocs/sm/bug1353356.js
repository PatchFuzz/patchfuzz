var lfLogBuffer = `



    setJitCompilerOption("ion.warmup.trigger", 4);
    var g = newGlobal();
    g.debuggeeGlobal = this;
    g.eval("(" + function () {
        dbg = new Debugger(debuggeeGlobal);
        dbg.onExceptionUnwind = function (frame, exc) {
            var s = '!';
            for (var f = frame; f; f = f.older)
            debuggeeGlobal.log += s;
        };
    } + ")();");
      j('Number.prototype.toString.call([])');





}



oomTest(() => i({
    new  : (true  ),
    thisprops: true
}));
`;
lfLogBuffer = lfLogBuffer.split('\n');
var lfRunTypeId = -1;
var lfCodeBuffer = "";
while (true) {
    var line = lfLogBuffer.shift();
    if (line == null) {
        break;
    } else if (line == "
        loadFile(lfCodeBuffer);
        lfCodeBuffer = "";
        loadFile(line);
    } else {
        lfCodeBuffer += line + "\n";
    }
}
if (lfCodeBuffer) loadFile(lfCodeBuffer);
function loadFile(lfVarx) {
    try {
        if (lfVarx.indexOf("
            lfRunTypeId = parseInt(lfVarx.split(" ")[1]) % 6;
        } else {
            switch (lfRunTypeId) {
                case 4:
                    oomTest(function() {
                        let m = parseModule(lfVarx);
                    });
                    break;
                default:
                    evaluate(lfVarx);
            }
        }
    } catch (lfVare) {}
}
