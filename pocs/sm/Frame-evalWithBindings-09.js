var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var f1;
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    f1 = frame;

    
    var x = frame.evalWithBindings("wrongSpeling", {rightSpelling: 2}).throw;

    print(frame.evalWithBindings("exc.name", {exc: x}).return, "ReferenceError");
    hits++;
};
dbg.onExceptionUnwind = function (frame, exc) {
    print(frame !== f1, true);

    
    print(f1.eval("rightSpelling").return, "dependent");
    print(f1.evalWithBindings("n + rightSpelling", {n: "in"}).return, "independent");

    
    print(frame.eval("rightSpelling").return, 2);
    print(frame.evalWithBindings("rightSpelling + three", {three: 3}).return, 5);
    hits++;
};
g.eval("(function () { var rightSpelling = 'dependent'; debugger; })();");
