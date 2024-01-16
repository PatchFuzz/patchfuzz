

var g = newGlobal({newCompartment: true});
g.debuggeeGlobal = this;
g.dbg = null;
g.eval("(" + function () {
        dbg = new Debugger(debuggeeGlobal);
        dbg.onExceptionUnwind = function (frame, exc) {
            assertEq(frame instanceof Debugger.Frame, true);
            assertEq(exc instanceof Debugger.Object, true);
            var s = '!';
            for (var f = frame; f; f = f.older)
                if (f.type === "call")
                    s += f.callee.name;
            s += ', ';
            debuggeeGlobal.log += s;
        };
    } + ")();");

var log;

function k() {
    throw new Error("oops");  
}

function j() {
    k();  
    log += 'j-unreached, ';
}

function h() {
    j();  
    log += 'h-unreached, ';
}

function f() {
    try {
        h(); 
    } catch (exc) {
        log += 'f-catch';
    }
}

log = '';
f();
g.dbg.enabled = false;
assertEq(log, '!kjhf, !jhf, !hf, !f, f-catch');
