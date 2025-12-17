const g = newGlobal({ newCompartment: true });
const dbg = new Debugger(g);
g.eval(`
var done = false;
async function* f() {
  await null;
  await null;
  await null;
  await null;
  done = true;
}
`);

dbg.onEnterFrame = f => {
  frame = f;
  dbg.onEnterFrame = undefined;
};

setInterruptCallback(function() {
  const stack = saveStack();

  
  
  
  
  
  
  
  if (
    stack.parent &&
    stack.parent.source === "self-hosted" &&
    stack.parent.functionDisplayName === "AsyncGeneratorNext" &&
    stack.parent.parent &&
    stack.parent.parent.source === stack.source &&
    stack.parent.parent.line === DRAIN_QUEUE_LINE
  ) {
    return false;
  }

  
  interruptIf(true);
  return true;
});


const it = g.f();
let promise = it.next();



interruptIf(true);


const DRAIN_QUEUE_LINE = saveStack().line + 1;
drainJobQueue();

let threw = false;
try {
  
  
  frame.environment;
} catch (err) {
  threw = true;
}
print(threw, true);





print(frame.terminated, true);



print(g.done, false);
