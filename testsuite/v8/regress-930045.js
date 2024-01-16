





(function CaptureStackTracePrivateSymbol() {
  var o = {};
  Object.preventExtensions(o);

  try { Error.captureStackTrace(o); } catch (e) {}
  try { Error.captureStackTrace(o); } catch (e) {}
})();

(function PrivateFieldAfterPreventExtensions() {
  class C {
    constructor() {
      this.x = 1;
      Object.preventExtensions(this);
    }
  }

  class D extends C {
    #i = 42;

    set(i) { this.#i = i; }
    get(i) { return this.#i; }
  }

  let d = new D();
  d.x = 0.1;
  assertEquals(42, d.get());
  d.set(43);
  assertEquals(43, d.get());
})();
