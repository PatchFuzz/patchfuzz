const dbgGlobal = newGlobal({ newCompartment: true });
dbgGlobal.parent = this;
dbgGlobal.eval(`
var entered = 0;
var forceReturn = false;
Debugger(parent).onEnterFrame = function () {
  entered++;
  if (forceReturn) {
    return { return: "force return" };
  }
  return undefined;
};
`);

{
  function* f1() { yield 10; };

  dbgGlobal.entered = 0;
  let g = f1();
  print(dbgGlobal.entered, 1);
  dbgGlobal.forceReturn = true;
  let ret = g.next();
  dbgGlobal.forceReturn = false;
  print(dbgGlobal.entered, 2);

  print(ret.value, "force return");
}

{
  async function f2() { await {}; }

  dbgGlobal.entered = 0;
  let p = f2();
  print(dbgGlobal.entered, 1);
  dbgGlobal.forceReturn = true;
  drainJobQueue();
  dbgGlobal.forceReturn = false;
  print(dbgGlobal.entered, 2);

  let ret = null;
  p.then(x => ret = x);
  drainJobQueue();
  print(ret, "force return");
}

{
  async function* f3() { await {}; }

  dbgGlobal.entered = 0;
  let g = f3();
  print(dbgGlobal.entered, 1);
  dbgGlobal.forceReturn = true;
  let p = g.next();
  dbgGlobal.forceReturn = false;
  print(dbgGlobal.entered, 2);

  let ret = null;
  p.then(v => ret = v);
  drainJobQueue();
  print(ret.value, "force return");
}

{
  let m = registerModule("1", parseModule("await {};"));
  moduleLink(m);

  dbgGlobal.entered = 0;
  let p = moduleEvaluate(m);
  print(dbgGlobal.entered, 1);
  dbgGlobal.forceReturn = true;
  drainJobQueue();
  dbgGlobal.forceReturn = false;
  print(dbgGlobal.entered, 2);

  let ret = null;
  p.then(x => ret = x);
  drainJobQueue();
  print(ret, undefined);
}
