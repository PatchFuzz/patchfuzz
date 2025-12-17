;

const g = newGlobal({ newCompartment: true });
const dbg = new Debugger(g);

g.eval(`
function* f() {
  var value = 42;
  yield;
  {
    let block = "block";
    yield;
  }
  for (let loop of ["loop"]) {
    yield;
  }
  try {
    throw "err";
  } catch (err) {
    yield;
  }
  return value;
}
`);

let frame;
dbg.onEnterFrame = f => {
  frame = f;
  dbg.onEnterFrame = undefined;
};

const it = g.f();

print(!!frame, true);

let result = it.next();

print(result.done, false);
print(result.value, undefined);

print(
  JSON.stringify(frame.environment.names()),
  JSON.stringify(["arguments", "value"])
);

print(frame.environment.getVariable("value"), 42);

frame.environment.setVariable("value", 43);

print(frame.environment.getVariable("value"), 43);

result = it.next();

print(
  JSON.stringify(frame.environment.names()),
  JSON.stringify(["block"])
);
print(frame.environment.getVariable("block"), "block");

result = it.next();

print(
  JSON.stringify(frame.environment.names()),
  JSON.stringify(["loop"])
);
print(frame.environment.getVariable("loop"), "loop");

result = it.next();

print(
  JSON.stringify(frame.environment.names()),
  JSON.stringify(["err"])
);
print(frame.environment.getVariable("err"), "err");

result = it.next();

print(result.done, true);
print(result.value, 43);

print(() => frame.environment, Error);
