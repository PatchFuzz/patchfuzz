let g = newGlobal({newCompartment: true});
let dbg = new Debugger();
let gw = dbg.addDebuggee(g);

g.eval(`
    async function* f() {
        await 123;
        return "ponies";
    }
`);

let counter = 0;
let thenCalled = false;
dbg.onEnterFrame = frame => {
    frame.onPop = completion => {
        if (counter++ === 0) {
            let genObj = completion.return.unsafeDereference();

            
            
            
            genObj.next().then(() => {
                thenCalled = true;
            });
        }
    };
};

let it = g.f();

print(counter, 1);

let caught = false;
try {
  
  
  it.next();
} catch (e) {
  caught = true;
}
print(caught, true);

caught = false;
try {
  it.throw();
} catch (e) {
  caught = true;
}
print(caught, true);

caught = false;
try {
  it.return();
} catch (e) {
  caught = true;
}
print(caught, true);

drainJobQueue();

print(thenCalled, false);
