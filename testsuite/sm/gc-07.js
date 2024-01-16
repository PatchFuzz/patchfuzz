
var g = newGlobal({newCompartment: true});
for (var j = 0; j < 4; j++) {
    var dbg = new Debugger;
    dbg.addDebuggee(g);
    dbg.enabled = false;
    dbg = null;
    gc(); gc();
} 
