



{
  const x = [, 1];
  x.__proto__ = [42];
  const y = [...x];
  assertEquals([42, 1], y);
  assertTrue(y.hasOwnProperty(0));
}

{
  const x = [, 1];
  x.__proto__ = [42];
  assertEquals(42, x[Symbol.iterator]().next().value);
}

{
  const array_prototype = [].__proto__;
  array_prototype[0] = 42;
  const x = [, 1];
  assertEquals(42, x[Symbol.iterator]().next().value);
  delete array_prototype[0];
}
