;

var g = newGlobal({ newCompartment: true });
var dbg = Debugger(g);
g.eval(`
async function* f() {
  debugger;
  yield 42;
  debugger;
  return 50
}
`);

let frame;
const promises = [];
dbg.onEnterFrame = function(f) {
  frame = f;
  promises.push(["enter", frame.asyncPromise]);

  frame.onPop = function() {
    promises.push(["leave", frame.asyncPromise]);
  };

  dbg.onDebuggerStatement = function(f) {
    print(f, frame);
    promises.push(["dbg", frame.asyncPromise]);
  };
};


(async () => {
  const it = g.f();

  
  print(frame.asyncPromise, null);

  print(promises.length, 2);
  print(promises[0][0], "enter");
  print(promises[0][1], null);

  print(promises[1][0], "leave");
  print(promises[1][1], null);


  const result1Promise = it.next();

  const frameIt1Promise = frame.asyncPromise;
  print(frameIt1Promise instanceof Debugger.Object, true);
  print(frameIt1Promise.unsafeDereference(), result1Promise);

  print(promises.length, 5);
  print(promises[2][0], "enter");
  print(promises[2][1], frameIt1Promise);

  print(promises[3][0], "dbg");
  print(promises[3][1], frameIt1Promise);

  print(promises[4][0], "leave");
  print(promises[4][1], frameIt1Promise);

  await result1Promise;

  
  print(frame.asyncPromise, null);

  print(promises.length, 7);
  print(promises[5][0], "enter");
  print(promises[5][1], frameIt1Promise);

  print(promises[6][0], "leave");
  print(promises[6][1], frameIt1Promise);


  const result2Promise = it.next();

  const frameIt2Promise = frame.asyncPromise;
  print(frameIt2Promise instanceof Debugger.Object, true);
  print(frameIt2Promise.unsafeDereference(), result2Promise);
  print(frameIt1Promise !== frameIt2Promise, true);

  print(promises.length, 10);
  print(promises[7][0], "enter");
  print(promises[7][1], frameIt2Promise);

  print(promises[8][0], "dbg");
  print(promises[8][1], frameIt2Promise);

  print(promises[9][0], "leave");
  print(promises[9][1], frameIt2Promise);

  await result2Promise;

  
  print(() => frame.asyncPromise, Error);

  print(promises.length, 12);
  print(promises[10][0], "enter");
  print(promises[10][1], frameIt2Promise);

  print(promises[11][0], "leave");
  print(promises[11][1], frameIt2Promise);
})();
