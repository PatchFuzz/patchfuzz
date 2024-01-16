













try {
  [...RegExp.$.$] = String();
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

var o = { a : { b : { c : { d: { e : { } } } } } };

[...o.a.b.c.d.e] = "foo";

assert(o.a.b.c.d.e.length === 3);
assert(o.a.b.c.d.e[0] === "f");
assert(o.a.b.c.d.e[1] === "o");
assert(o.a.b.c.d.e[2] === "o");

[o.a.b.c.d.e] = "foo";

assert(o.a.b.c.d.e === "f");

[this.o.a.b.c.d.e] = "bar";
assert(this.o.a.b.c.d.e === "b");

[...this.o.a.b.c.d.e] = "bar";
assert(this.o.a.b.c.d.e.length === 3);
assert(this.o.a.b.c.d.e[0] === "b");
assert(this.o.a.b.c.d.e[1] === "a");
assert(this.o.a.b.c.d.e[2] === "r");
