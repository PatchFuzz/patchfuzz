;

var g = newGlobal({ newCompartment: true });
var dbg = Debugger(g);
g.eval(`
async function f() {
  debugger;
  await Promise.resolve();
  debugger;
}
`);

let frame;
const promises = [];
dbg.onEnterFrame = function(f) {
  frame = f;
  promises.push(["start", frame.asyncPromise]);

  dbg.onEnterFrame = function(f) {
    print(f, frame);
    promises.push(["resume", frame.asyncPromise]);
  };

  frame.onPop = function() {
    promises.push(["suspend", frame.asyncPromise]);

    frame.onPop = function() {
      promises.push(["finish", frame.asyncPromise]);
    };
  };

  dbg.onDebuggerStatement = function(f) {
    print(f, frame);
    promises.push(["dbg", frame.asyncPromise]);
  };
};

(async () => {
  const resultPromise = g.f();

  const framePromise = frame.asyncPromise;
  print(framePromise instanceof Debugger.Object, true);
  print(framePromise.unsafeDereference(), resultPromise);

  print(promises.length, 3);
  print(promises[0][0], "start");
  print(promises[0][1], null);

  print(promises[1][0], "dbg");
  print(promises[1][1], framePromise);

  print(promises[2][0], "suspend");
  print(promises[2][1], framePromise);

  await resultPromise;

  
  print(() => frame.asyncPromise, Error);

  print(promises.length, 6);

  print(promises[3][0], "resume");
  print(promises[3][1], framePromise);

  print(promises[4][0], "dbg");
  print(promises[4][1], framePromise);

  print(promises[5][0], "finish");
  print(promises[5][1], framePromise);
})();
