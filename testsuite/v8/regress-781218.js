





var m = new Map();

function C() {}



%CompleteInobjectSlackTracking(new C());

function f(o) {
  o.x = true;
}


;
%PrepareFunctionForOptimization(f);
f(new C());
f(new C());

var o = new C();
%HeapObjectVerify(o);


m.set({}, 3);

m.set(o, 1);


o.x = true;
%HeapObjectVerify(o);

delete o.x;
%HeapObjectVerify(o);




%OptimizeFunctionOnNextCall(f);
f(o);

%HeapObjectVerify(o);
assertEquals(1, m.get(o));


for (let i = 0; i < 1000; i++) {
  let object = {};
  m.set(object, object);
  assertEquals(1, m.get(o));
}
