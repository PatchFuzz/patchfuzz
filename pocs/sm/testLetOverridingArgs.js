function f1() { { let arguments = 42; return arguments } }
print(f1(), 42);

function f2() { { let arguments; return arguments } }
print(f2(), undefined);
