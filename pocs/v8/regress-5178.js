print(() => {
  try { throw {} } catch({a=b, b}) { a+b }
}, ReferenceError);

try { throw {a: 42} } catch({a, b=a}) { print(42, b) };
