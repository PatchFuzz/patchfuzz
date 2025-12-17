g = async function() {
  await 10;
};
print(undefined, g.prototype);
g();
print(undefined, g.prototype);

gen = function*() {
  yield 10;
};
print(gen.prototype != undefined && gen.prototype != null);
gen();
print(gen.prototype != undefined && gen.prototype != null);

async_gen = async function*() {
  yield 10;
};
print(async_gen.prototype != undefined && async_gen.prototype != null);
async_gen();
print(async_gen.prototype != undefined && async_gen.prototype != null);

function foo(x) {
  return x instanceof Proxy;
};
%PrepareFunctionForOptimization(foo);
function test_for_exception() {
  caught_exception = false;
  try {
    foo({});
  } catch (e) {
    caught_exception = true;
    print(
        'Function has non-object prototype \'undefined\' in instanceof check',
        e.message);
  } finally {
    print(caught_exception);
  }
}

test_for_exception();
test_for_exception();
%OptimizeFunctionOnNextCall(foo);
test_for_exception();

Proxy.__proto__.prototype = Function.prototype;
print((() => {}) instanceof Proxy);

print(
    new Proxy({}, {
      get(o, s) {
        return s;
      }
    }).test,
    'test');

Proxy.__proto__ = {
  prototype: {b: 2},
  a: 1
};

print(Proxy.prototype, {b: 2});

(function testProxyCreationContext() {
  let realm = Realm.create();
  let p1 = new Proxy({}, {});
  let p2 = Realm.eval(realm, "new Proxy({}, {})");
  print(0, Realm.owner(p1));
  print(1, Realm.owner(p2));
})();
