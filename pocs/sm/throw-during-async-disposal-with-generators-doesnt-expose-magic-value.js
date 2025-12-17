;

class CustomError extends Error {}

{
  const values = [];
  let caught = false;
  async function* gen() {
    yield await Promise.resolve(1);
    await using a = {
      [Symbol.asyncDispose]() {
        values.push("a");
        throw new CustomError();
      }
    }
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
  }
  async function testGeneratorDoesntExposeMagicValue() {
    let it = gen();
    values.push((await it.next()).value);
    values.push((await it.next()).value);
    it.return(40).catch(e => {
      caught = true;
      
      
      
      print(e instanceof CustomError, true);
    });
  }
  testGeneratorDoesntExposeMagicValue();
  drainJobQueue();
  print(values, [1, 2, "a"]);
  print(caught, true);
}
