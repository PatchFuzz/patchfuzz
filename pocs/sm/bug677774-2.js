function f(a, b) { return a > b; }

print(f(5, 6), false)
print(f(1337, 42), true)
print(f(-12, 6), false)
print(f(5, -6), true)
print(f(-3, -2), false)
print(f(-5, -6), true)
