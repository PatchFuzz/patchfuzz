function zero() { return 0; }
function f(x) { return (0xffffffff > zero()) * (0xffffffff >>> x); }
print(f(0), 4294967295);
print(f(0), 4294967295);
