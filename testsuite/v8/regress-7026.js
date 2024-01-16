



function foo(o, k) { return o[k]; }

const a = "a";
foo([1], 0);
foo({a:1}, a);

const p = new Proxy({}, {
  get(target, name) {
    return name;
  }
});

assertEquals(a + "b", foo(p, a + "b"));
