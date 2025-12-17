;

{
  const disposed = [];
  const d = {
    [Symbol.dispose]() {
      disposed.push(1);
    }
  };
  outer: for (let a of [1]) {
    for (using x of [d]) {
      {
        let a = 0, b = () => a;
        break outer;
      }
    }
  }
  print(disposed, [1]);
}

{
  const disposed = [];
  const d = {
    [Symbol.dispose]() {
      disposed.push(1);
    }
  };
  outer: for (let a of [1]) {
    for (using x of [d]) {
      continue outer;
    }
  }
  print(disposed, [1]);
}

{
  const disposed = [];
  const d = {
    [Symbol.dispose]() {
      disposed.push(1);
    }
  };
  outer: for (let a of [1]) {
    for (using x of [d]) {
      {
        let a = 0, b = () => a;
        continue outer;
      }
    }
  }
  print(disposed, [1]);
}

{
  const disposed = [];
  const d = {
    [Symbol.dispose]() {
      disposed.push(1);
    }
  }
  for (const i in { a: 1 }) {
    using x = d;
    break;
  }
  print(disposed, [1]);
}

{
  const disposed = [];
  const d = {
    [Symbol.dispose]() {
      disposed.push(1);
    }
  }
  outer: for (const i in { a: 1 }) {
    for (const j in { b: 1 }) {
      using x = d;
      break outer;
    }
  }
  print(disposed, [1]);
}

{
  const disposed = [];
  const d = {
    [Symbol.dispose]() {
      disposed.push(1);
    }
  }
  outer: for (const i in { a: 1 }) {
    for (const j in { b: 1 }) {
      using x = d;
      continue outer;
    }
  }
  print(disposed, [1]);
}

{
  const disposed = [];
  const d = {
    [Symbol.dispose]() {
      disposed.push(1);
    }
  }
  outer: for (const i in { a: 1 }) {
    for (const j in { b: 1 }) {
      using x = d;
      {
        let a = 0, b = () => a;
        break outer;
      }
    }
  }
  print(disposed, [1]);
}

{
  const disposed = [];
  const d = {
    [Symbol.dispose]() {
      disposed.push(1);
    }
  }
  outer: for (const i in { a: 1 }) {
    for (const j in { b: 1 }) {
      using x = d;
      {
        let a = 0, b = () => a;
        continue outer;
      }
    }
  }
  print(disposed, [1]);
}
