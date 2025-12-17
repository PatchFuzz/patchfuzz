;
;
const { Pattern } = Match;
const { OBJECT_WITH_EXACTLY: EXACT } = Pattern;

let g = newGlobal({newCompartment: true});
let dbg = Debugger(g);
const log = [];
g.capture = function () {
  dbg.getNewestFrame().onPop = completion => {
    log.push(completion);
  };
};

g.eval(`
    async function f() {
        capture();
        await Promise.resolve(3);
        return "ok";
    }
`);


const promise = g.f();
promise.then(value => {
  print(value, "ok");

  Pattern([
    EXACT({ return: new DebuggerObjectPattern("Promise"), await:true }),
    EXACT({ return: new DebuggerObjectPattern("Promise") }),
  ]).print(log);

  throw "all-jobs-completed-successfully";
});
