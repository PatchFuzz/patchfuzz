

var dbg = new Debugger;

function check(obj) {
    
    assertEq(dbg.hasDebuggee(obj), false);

    
    assertEq(dbg.removeDebuggee(obj), undefined);
}


var g1 = newGlobal('same-compartment');
check(g1);


var g2 = newGlobal({newCompartment: true});
g2.parent = this;
g2.eval("var dbg = new Debugger(parent);");
check(g2);
