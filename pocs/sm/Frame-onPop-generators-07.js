;
;
;
const { Pattern } = Match;
const { OBJECT_WITH_EXACTLY: X } = Pattern;

const g = newGlobal({ newCompartment: true });
g.eval(`
  function* f() {
    yield "yielding";
    return "returning";
  }
`);

const dbg = new Debugger(g);
const completions = [];
dbg.onEnterFrame = frame => {
  frame.onPop = completion => {
    completions.push(completion);
  };
};

print([... g.f()], ["yielding"]);
print(JSON.stringify(completions));
Pattern([
  X({
    return: new DebuggerObjectPattern("Generator", {}),
    yield: true,
    initial: true
  }),
  X({
    return: new DebuggerObjectPattern("Object", { value: "yielding", done: false }),
    yield: true
  }),
  X({
    return: new DebuggerObjectPattern("Object", { value: "returning", done: true })
  }),
]).print(completions);
