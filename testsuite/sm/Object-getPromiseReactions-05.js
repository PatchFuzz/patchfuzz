


const g = newGlobal({ newCompartment: true });
const dbg = new Debugger;
const DOg = dbg.addDebuggee(g);

g.eval(`
    var pResolve, pReject;
    var p0 = new Promise((resolve, reject) => { pResolve = resolve; pReject = reject });

    
    
    async function* f1() { debugger; await p0; }

    
    
    async function* f2() { await p0; debugger; }
`);

let DFf1, DFf2;
dbg.onDebuggerStatement = (frame) => {
  DFf1 = frame;
  dbg.onDebuggerStatement = (frame) => {
    DFf2 = frame;
    dbg.onDebuggerStatement = () => { throw "Shouldn't fire twice"; };
  };
};

g.eval(`var p1 = f1().next();`);
assertEq(DFf1.callee.name, "f1");

g.eval(`var p2 = f2().next();`);
assertEq(DFf2, undefined);

const [DOp0, DOp1, DOp2] =
      [g.p0, g.p1, g.p2].map(p => DOg.makeDebuggeeValue(p));

const reactions = DOp0.getPromiseReactions();
assertEq(reactions.length, 2);
assertEq(reactions[0], DFf1);
assertEq(true, reactions[1] instanceof Debugger.Frame);


g.pResolve(42);
drainJobQueue();
assertEq(DFf2.terminated, true);
assertEq(reactions[1], DFf2);
