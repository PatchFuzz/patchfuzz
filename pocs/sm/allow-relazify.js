function f() {
  return 1;
}
print(isLazyFunction(f), true);
print(isRelazifiableFunction(f), false);
f();
print(isLazyFunction(f), false);
print(isRelazifiableFunction(f), true);
