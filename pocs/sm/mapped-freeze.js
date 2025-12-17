function f(a) {
  Object.freeze(arguments);
  a = 1;
  return arguments[0];
}

print(f(10), 10);
print(f("hello"), "hello");
