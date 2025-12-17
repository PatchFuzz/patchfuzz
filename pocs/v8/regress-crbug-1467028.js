var o;
function f() {
  "use strict";
  class C {
    static {
      o.boom;
    }
  }
  return C;
}
print(f, TypeError, /Cannot read properties of undefined/);
