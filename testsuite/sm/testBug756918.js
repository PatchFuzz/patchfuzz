

with({})
  let([] = []) {
    eval("throw new Error()");
  }
