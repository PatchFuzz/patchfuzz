async function f() {
    
    
    var q0, q1, q2, q3, q4, q5, q6, q7, q8, q9;
}

var g = newGlobal({newCompartment: true});
g.parent = this;
g.eval(`
    var dbg = new Debugger(parent);
    dbg.onEnterFrame = frame => {};
`);



for (let i = 0; i < 3; i++)
    f();
