;

const g = newGlobal({ newCompartment: true });
const dbg = new Debugger(g);

g.eval(`
var resolveTop;
var resolveBlock;
var resolveLoop;
var resolveCatch;

async function* f() {
  var promises = {
    top: new Promise(r => { resolveTop = r; }),
    block: new Promise(r => { resolveBlock = r; }),
    loop: new Promise(r => { resolveLoop = r; }),
    catch: new Promise(r => { resolveCatch = r; }),
  };

  var value = 42;
  await promises.top;
  {
    let block = "block";
    await promises.block;
  }
  for (let loop of ["loop"]) {
    await promises.loop;
  }
  try {
    throw "err";
  } catch (err) {
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
  const it = g.f();

  print(!!frame, true);

  let promise = it.next();

  print(
    JSON.stringify(frame.environment.names()),
    JSON.stringify(["arguments", "promises", "value"])
  );

  

  frame.environment.setVariable("value", 43);

  g.resolveTop();
  await waitForOnPop(frame);

  print(
    JSON.stringify(frame.environment.names()),
    JSON.stringify(["block"])
  );
  print(frame.environment.getVariable("block"), "block");

  g.resolveBlock();
  await waitForOnPop(frame);

  print(
    JSON.stringify(frame.environment.names()),
    JSON.stringify(["loop"])
  );
  print(frame.environment.getVariable("loop"), "loop");

  g.resolveLoop();
  await waitForOnPop(frame);

  print(
    JSON.stringify(frame.environment.names()),
    JSON.stringify(["err"])
  );
  print(frame.environment.getVariable("err"), "err");

  g.resolveCatch();
  const result = await promise;

  print(result.done, true);
  

  print(() => frame.environment, Error);

  throw "all-jobs-completed-successfully";
})();
