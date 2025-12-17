;

let a;

function run(op) {
  a = [];
  for (let i = 0; i < 1000; i++) {
    a.push(op());
  }
  return a[0];
}

function check(op) {
  print(isNurseryAllocated(run(op)), true);
  minorgc();
  print(isNurseryAllocated(run(op)), false);

  a = undefined;
  gc();
}

setupPretenureTest();


check(() => { return {}; });


check(() => { return []; });


check(() => { return new Object(); });
check(() => { return Object(); });


check(() => { return Array(); });
check(() => { return Array(150); });
check(() => { return new Array(); });
check(() => { return new Array(150); });


check(() => { return () => 0 });
function f() {
  let x = 1;
  check(() => { return () => x });
  x = 2;
}
f();


let fdo = new FakeDOMObject();
check(() => { return fdo.doBar(); })
