function foo() {
  'use asm';
  function bar() {
    return -1e-15;
  }
  return {bar: bar};
}

print(-1e-15, foo().bar());
