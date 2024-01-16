




























var a = {x: 1};
var a_deprecate = {x: 1};
a_deprecate.x = 1.5;
function create() {
  return {__proto__: a, y: 1};
}
var b1 = create();
var b2 = create();
var b3 = create();
var b4 = create();

function set(b) {
  b.x = 5;
  b.z = 10;
};
%PrepareFunctionForOptimization(set);
set(b1);
set(b2);
%OptimizeFunctionOnNextCall(set);
set(b3);
var called = false;
a.x = 1.5;
Object.defineProperty(a, 'z', {
  set: function(v) {
    called = true;
  }
});
set(b4);
assertTrue(called);
assertEquals(undefined, b4.z);
