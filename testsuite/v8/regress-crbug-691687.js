





function g() { eval() }
with ({}) { }
f = ({x}) => x;
assertEquals(42, f({x: 42}));
