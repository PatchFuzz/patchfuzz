prop = "property";

function f(o) {
  return o.prop;
}

f(this);
f(this);

delete this.prop;

gc();
print(undefined, f(this));
