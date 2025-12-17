function f(s) {
  arguments.length;
  return (s += 10) < 0;
}

print(f(-100));
print(f(-20));
print(f(-10));
print(f(-5));
print(f(0));
print(f(10));
