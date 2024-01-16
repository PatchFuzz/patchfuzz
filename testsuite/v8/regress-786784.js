





function f() {
  function g(arg) { return arg; }
  
  return function() { return g(42); };
}

const a = Realm.create();
const b = Realm.create();



const x = Realm.eval(a, f.toString() + " f()");
const y = Realm.eval(b, f.toString() + " f()");


x();






%DebugToggleBlockCoverage(true);




y();
