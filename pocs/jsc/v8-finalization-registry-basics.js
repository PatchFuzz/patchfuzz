print("./resources/v8-mjsunit.js", "caller relative");

(function TestConstructFinalizationRegistry() {
  let fg = new FinalizationRegistry(() => {});
  print(fg.toString(), "[object FinalizationRegistry]");
  print(fg.__proto__, Object.prototype);
  print(fg.__proto__.__proto__, Object.prototype);
})();

(function TestFinalizationRegistryConstructorCallAsFunction() {
  let caught = false;
  let message = "";
  try {
    let f = FinalizationRegistry(() => {});
  } catch (e) {
    message = e.message;
    caught = true;
  } finally {
    print(caught);
  }
})();

(function TestConstructFinalizationRegistryCleanupNotCallable() {
  let message = "FinalizationRegistry: cleanup must be callable";
  print(() => { let fg = new FinalizationRegistry(); }, TypeError, message);
  print(() => { let fg = new FinalizationRegistry(1); }, TypeError, message);
  print(() => { let fg = new FinalizationRegistry(null); }, TypeError, message);
})();

(function TestConstructFinalizationRegistryWithCallableProxyAsCleanup() {
  let handler = {};
  let obj = () => {};
  let proxy = new Proxy(obj, handler);
  let fg = new FinalizationRegistry(proxy);
})();

(function TestConstructFinalizationRegistryWithNonCallableProxyAsCleanup() {
  let message = "FinalizationRegistry: cleanup must be callable";
  let handler = {};
  let obj = {};
  let proxy = new Proxy(obj, handler);
  print(() => { let fg = new FinalizationRegistry(proxy); }, TypeError, message);
})();

(function TestRegisterWithNonObjectTarget() {
  let fg = new FinalizationRegistry(() => {});
  let message = "FinalizationRegistry.prototype.register: target must be an object";
  print(() => fg.register(1, "holdings"), TypeError, message);
  print(() => fg.register(false, "holdings"), TypeError, message);
  print(() => fg.register("foo", "holdings"), TypeError, message);
  print(() => fg.register(null, "holdings"), TypeError, message);
  print(() => fg.register(undefined, "holdings"), TypeError, message);
})();

(function TestRegisterWithProxy() {
  let handler = {};
  let obj = {};
  let proxy = new Proxy(obj, handler);
  let fg = new FinalizationRegistry(() => {});
  fg.register(proxy);
})();

(function TestRegisterTargetAndHoldingsSameValue() {
  let fg = new FinalizationRegistry(() => {});
  let obj = {a: 1};
  
  print(() => fg.register(obj, obj), TypeError,
               "FinalizationRegistry.prototype.register: target and holdings must not be same");
  let holdings = {a: 1};
  fg.register(obj, holdings);
})();

(function TestRegisterWithoutFinalizationRegistry() {
  print(() => FinalizationRegistry.prototype.register.call({}, {}, "holdings"), TypeError);
  
  let fg = new FinalizationRegistry(() => {});
  FinalizationRegistry.prototype.register.call(fg, {}, "holdings");
})();

(function TestUnregisterWithNonExistentKey() {
  let fg = new FinalizationRegistry(() => {});
  let success = fg.unregister({"k": "whatever"});
  print(success);
})();

(function TestUnregisterWithNonFinalizationRegistry() {
  print(() => FinalizationRegistry.prototype.unregister.call({}, {}),
               TypeError);
})();

(function TestUnregisterWithNonObjectUnregisterToken() {
  let fg = new FinalizationRegistry(() => {});
  print(() => fg.unregister(1), TypeError);
  print(() => fg.unregister(BigInt(1)), TypeError);
  print(() => fg.unregister('one'), TypeError);
  print(() => fg.unregister(true), TypeError);
  print(() => fg.unregister(false), TypeError);
  print(() => fg.unregister(undefined), TypeError);
  print(() => fg.unregister(null), TypeError);
})();

(function TestWeakRefConstructor() {
  let wr = new WeakRef({});
  print(wr.toString(), "[object WeakRef]");
  print(wr.__proto__, Object.prototype);

  let deref_desc = Object.getOwnPropertyDescriptor(wr.__proto__, "deref");
  print(true, deref_desc.configurable);
  print(false, deref_desc.enumerable);
  print("function", typeof deref_desc.value);
})();

(function TestWeakRefConstructorWithNonObject() {
  let message = "WeakRef: target must be an object";
  print(() => new WeakRef(), TypeError, message);
  print(() => new WeakRef(1), TypeError, message);
  print(() => new WeakRef(false), TypeError, message);
  print(() => new WeakRef("foo"), TypeError, message);
  print(() => new WeakRef(null), TypeError, message);
  print(() => new WeakRef(undefined), TypeError, message);
})();

(function TestWeakRefConstructorCallAsFunction() {
  let caught = false;
  let message = "";
  try {
    let f = WeakRef({});
  } catch (e) {
    message = e.message;
    caught = true;
  } finally {
    print(caught);
  }
})();

(function TestWeakRefWithProxy() {
  let handler = {};
  let obj = {};
  let proxy = new Proxy(obj, handler);
  let wr = new WeakRef(proxy);
})();
