const iterable = {
  [Symbol.iterator]: () => ({
    next: () => ({
      done: false,
      get value() {
        print()
        print('"value" getter is called');
        return 42;
      }
    })
  })
};

[,] = iterable;
