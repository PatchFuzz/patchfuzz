var g2arr = []; 
var xarr = []; 

var N = 4, M = 4;
for (var i = 0; i < N; i++) {
    var g1 = newGlobal({newCompartment: true});
    g1.M = M;
    var dbg = new Debugger(g1);
    var g2 = g1.eval("newGlobal('same-compartment')");
    g1.x = g2.eval("x = {};");

    dbg.onDebuggerStatement = function (frame) { xarr.push(frame.eval("x").return); };
    g1.eval("debugger;");
    g2arr.push(g2);

    g1 = null;
    gc();
}



print(g2arr.length, N);
print(xarr.length, N);





for (var i = 0; i < N; i++) {
    var obj = xarr[i];
    for (j = 0; j < M; j++) {
        print(obj instanceof Debugger.Object, true);
        g2arr[i].eval("x = x.prop = {};");
        obj = obj.getOwnPropertyDescriptor("prop").value;;
        print("seen" in obj, false);
        obj.seen = true;
        gc();
    }
}
