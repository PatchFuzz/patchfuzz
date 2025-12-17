let g = newGlobal({newCompartment: true});
g.eval(`function* f(x) { }`);
let dbg = new Debugger(g);

let it = g.f();

dbg.onEnterFrame = () => ({ return: "exit" });
const result = it.return();
print(result.value, "exit");
print(result.done, true);

const result2 = it.next();
print(result2.value, undefined);
print(result2.done, true);
