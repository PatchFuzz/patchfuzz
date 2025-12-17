;

class CustomError extends Error {}

{
  const values = [];
  let caught = false;
  function* gen() {
    yield 1;
    using a = {
      [Symbol.dispose]() {
        values.push("a");
        throw new CustomError();
      }
    }
    yield 2;
    yield 3;
  }
  function testGeneratorDoesntExposeMagicValue() {
    let it = gen();
    values.push(it.next().value);
    values.push(it.next().value);
    try {
      values.push(it.return(40).value);
    } catch (e) {
      caught = true;
      
      
      
      print(e instanceof CustomError, true);
    }
  }
  testGeneratorDoesntExposeMagicValue();
  print(values, [1, 2, "a"]);
  print(caught, true);
}
