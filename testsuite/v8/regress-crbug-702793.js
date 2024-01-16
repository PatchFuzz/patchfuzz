





prop = "property";

function f(o) {
  return o.prop;
}

f(this);
f(this);

delete this.prop;

gc();
assertEquals(undefined, f(this));
