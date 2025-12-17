;

var g = newGlobal({ newCompartment: true });
var dbg = Debugger(g);
g.eval(`
function* f() {
  debugger;
  yield;
  debugger;
}
`);

let frame;
const promises = [];
dbg.onDebuggerStatement = function(f) {
  frame = f;
  promises.push(frame.asyncPromise);
};

const it = g.f();

print(promises.length, 0);

it.next();

print(frame.asyncPromise, undefined);

print(promises.length, 1);
print(promises[0], undefined);

it.next();


print(() => frame.asyncPromise, Error);

print(promises.length, 2);
print(promises[1], undefined);
