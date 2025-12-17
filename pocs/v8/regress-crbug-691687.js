function g() { eval() }
with ({}) { }
f = ({x}) => x;
print(42, f({x: 42}));
print(42, f({x: 42}));
