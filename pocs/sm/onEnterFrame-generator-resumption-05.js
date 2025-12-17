;

let g = newGlobal({newCompartment: true});
g.values = [1, 2, 3];
g.eval(`function* f(arr=values) { yield* arr; }`);

let dbg = Debugger(g);

let hits = 0;
dbg.onEnterFrame = frame => {
    print(frame.callee.name, "f");
    hits++;
    return {return: 123};
};
dbg.uncaughtExceptionHook = exc => {
  print(exc instanceof TypeError, true);
  return {throw: "REJECTED"};
}
print(g.f, "REJECTED");
print(hits, 1);
