



assertThrows(() => {
  try { throw {} } catch({a=b, b}) { a+b }
}, ReferenceError);

try { throw {a: 42} } catch({a, b=a}) { assertEquals(42, b) };
