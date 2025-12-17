gczeal(9);
for (var i in function(){});
s = newGlobal({newCompartment: true});
aa = f();
function f(x) {
    evalcx(x, s)
}
function h(x) {
    f(x)
}

h("\
    var g = newGlobal({newCompartment: true});\
    g.debuggeeGlobal = this;\
    g.eval(\"(\" + function() {\
        var dbg = Debugger(debuggeeGlobal);\
        dbg.onDebuggerStatement = function(frame) {\
            frame.eval(\"f\")\
        }\
    } + \")()\");\
    debugger;\
");
z;
