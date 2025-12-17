function foo() {
  while(1);
}

if (print()) {
    Reflect.construct(foo, {});
}
