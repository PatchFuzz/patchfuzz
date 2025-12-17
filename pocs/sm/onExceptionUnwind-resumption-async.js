;

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);

g.eval(`
async function f() {
    return e;
}
`);


dbg.onExceptionUnwind = function(frame) {
    return undefined;
};
g.eval(`
var E;
f().catch(e => { exc = e });
drainJobQueue();
print(exc instanceof ReferenceError, true);
`);


dbg.onExceptionUnwind = function(frame) {
    return {
        return: 10
    };
};
var val = g.eval(`
var val;
f().then(v => { val = v });
drainJobQueue();
val;
`);
print(val, 10);
