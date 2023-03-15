

;

var g = newGlobal({ newCompartment: true });
var dbg = Debugger(g);
g.eval(`
function f() {
  debugger;
}
`);

let frame;
const promises = [];
dbg.onDebuggerStatement = function(f) {
  frame = f;
  promises.push(frame.asyncPromise);
};

const resultPromise = g.f();


assertThrowsInstanceOf(() => frame.asyncPromise, Error);

print(promises.length, 1);
print(promises[0], undefined);
