;

const disposed = [];

foo: {
  using d = {
    [Symbol.dispose]() {
      disposed.push(1);
    }
  };
  {
    let a = 0, b = () => a;
    break foo;
  }
}
print(disposed, [1]);
