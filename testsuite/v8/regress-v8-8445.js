





class MyRegExp {
  exec() { return null; }
}

assertEquals(["ab", ""], "abc".split(/c/g));
assertEquals([["a"]], [..."a".matchAll(/a/g)]);

Object.defineProperty(RegExp, Symbol.species, { get() { return MyRegExp; }});

assertEquals(["abc"], "abc".split(/c/g));
assertEquals([], [..."a".matchAll(/a/g)]);
