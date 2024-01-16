





function assertEquals() {}

function f(o) {
  if (o.setterProperty = 0) {
    return 1;
  }
  return 2;
}

function deopt() { %DeoptimizeFunction(f); }

assertEquals(2,
             f(Object.defineProperty({}, "setterProperty", { set: deopt })));
