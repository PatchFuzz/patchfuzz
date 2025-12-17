;

class CustomError extends Error {}

{
  const values = [];
  async function* gen() {
    yield 1;
    await using a = {
      [Symbol.asyncDispose]() {
        values.push("a");
      }
    }
    yield 2;
    await using b = {
      [Symbol.asyncDispose]() {
        values.push("b");
      }
    }
    throw new CustomError();
    yield 3;
  }
  let caught = false;
  async function testDisposalDuringThrowInGenerator() {
    let x = gen();
    values.push((await x.next()).value);
    values.push((await x.next()).value);
    try {
      await x.next();
    } catch (e) {
      print(e instanceof CustomError, true);
      caught = true;
    }
  }
  testDisposalDuringThrowInGenerator();
  drainJobQueue();
  print(caught, true);
  print(values, [1, 2, "b", "a"]);
}

{
  const values = [];
  async function* gen() {
    yield 1;
    await using a = {
      [Symbol.asyncDispose]() {
        values.push("a");
      }
    }
    yield 2;
    await using b = {
      [Symbol.asyncDispose]() {
        values.push("b");
      }
    }
    yield 3;
  }
  let caught = false;
  async function testDisposalDuringForcedThrowInGenerator() {
    let x = gen();
    values.push((await x.next()).value);
    values.push((await x.next()).value);
    try {
      
      
      
      await x.throw(new CustomError());
    } catch (e) {
      print(e instanceof CustomError, true);
      caught = true;
    }
  }
  testDisposalDuringForcedThrowInGenerator();
  drainJobQueue();
  print(caught, true);
  print(values, [1, 2, "a"]);
}
