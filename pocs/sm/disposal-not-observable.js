let called = 0;

{
  using d = {
    get [Symbol.dispose]() {
      called++;
      return () => {};
    }
  };
}

print(called, 1);
