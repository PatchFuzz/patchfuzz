


var g = newGlobal({ newCompartment: true });
g.eval(`
    async function f(y) {
        await true;
        await true;
    };
`);

g.f();
g.f();

var dbg = Debugger(g);
dbg.onEnterFrame = function(frame) {
    frame.onStep = function() {}
}
