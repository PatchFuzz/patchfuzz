;

{
  const values = [];
  const errorsToThrow = [new Error("test1"), new Error("test2")];
  function* gen() {
    using d = {
      value: "d",
      [Symbol.dispose]() {
        values.push(this.value);
      }
    }
    yield "a";
    yield "b";
    using c = {
      value: "c",
      [Symbol.dispose]() {
        values.push(this.value);
        throw errorsToThrow[0]; 
      }
    }
    throw errorsToThrow[1]; 
  }
  print(() => {
    let x = gen();
    values.push(x.next().value);
    values.push(x.next().value);
    x.next();
  }, errorsToThrow);

  print(values, ["a", "b", "c", "d"]);
}

{
  const values = [];
  const errorsToThrow = [new Error("test1"), new Error("test2")];
  function* gen() {
    using c = {
      value: "c",
      [Symbol.dispose]() {
        values.push(this.value);
        throw errorsToThrow[0];
      }
    }
    yield "a";
    yield "b";
    return;
  }

  print(() => {
    let x = gen();
    values.push(x.next().value);
    x.throw(errorsToThrow[1]); 
  }, errorsToThrow);

  print(values, ["a", "c"]);
}
