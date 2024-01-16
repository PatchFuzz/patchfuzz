



function* g(o) {
  yield 'x' in o;
}

assertTrue(g({x: 1}).next().value);
assertFalse(g({}).next().value);
