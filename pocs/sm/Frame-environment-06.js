;

const g = newGlobal({ newCompartment: true });
const dbg = new Debugger(g);

g.eval(`
var resolveTop;
var resolveBlock;
var resolveLoop;
var resolveCatch;

async function f() {
  var promises = {
    top: new Promise(r => { resolveTop = r; }),
    block: new Promise(r => { resolveBlock = r; }),
    loop: new Promise(r => { resolveLoop = r; }),
    catch: new Promise(r => { resolveCatch = r; }),
  };

  var value = 42;
  Promise.resolve().then(resolveTop);
  await promises.top;
  {
    let block = "block";
    Promise.resolve().then(resolveBlock);
    await promises.block;
  }
  for (let loop of ["loop"]) {
    Promise.resolve().then(resolveLoop);
    await promises.loop;
  }
  try {
    throw "err";
  } catch (err) {
    Promise.resolve().then(resolveCatch);
    await promises.catch;
  }
  return value;
}
`);

const waitForOnPop = frame => new Promise(r => {
  print(frame.onPop, undefined);
  frame.onPop = () => {
    frame.onPop = undefined;
    r();
  };
});

let frame;
dbg.onEnterFrame = f => {
  frame = f;
  dbg.onEnterFrame = undefined;
};

(async () => {
  const promise = g.f();

  print(!!frame, true);
  print(
    JSON.stringify(frame.environment.names()),
    JSON.stringify(["arguments", "promises", "value"])
  );
  print(frame.environment.getVariable("value"), 42);

  frame.environment.setVariable("value", 43);

  print(frame.environment.getVariable("value"), 43);

  await waitForOnPop(frame);

  print(
    JSON.stringify(frame.environment.names()),
    JSON.stringify(["block"])
  );
  print(frame.environment.getVariable("block"), "block");

  await waitForOnPop(frame);

  print(
    JSON.stringify(frame.environment.names()),
    JSON.stringify(["loop"])
  );
  print(frame.environment.getVariable("loop"), "loop");

  await waitForOnPop(frame);

  print(
    JSON.stringify(frame.environment.names()),
    JSON.stringify(["err"])
  );
  print(frame.environment.getVariable("err"), "err");

  const result = await promise;

  print(result, 43);

  print(() => frame.environment, Error);

  throw "all-jobs-completed-successfully";
})();
