



const iterable = {
  [Symbol.iterator]: () => ({
    next: () => ({
      done: false,
      get value() {
        assertUnreachable()
        print('"value" getter is called');
        return 42;
      }
    })
  })
};

[,] = iterable;
