;

class CustomError extends Error {}

{
  async function* gen() {
    yield 1;
    yield 2;
    yield 3;
  }

  const returned = [];
  const iter = gen();
  iter.return = function () {
    returned.push('return');
    throw new CustomError();
  }

  print(() => { return iter[Symbol.asyncDispose]() }, CustomError);
  print(returned, ['return']);
}

{
  async function* gen() {
    yield 1;
    yield 2;
    yield 3;
  }

  const returned = [];
  const iter = gen();
  iter.return = function () {
    returned.push('return');
    throw new CustomError();
  }

  async function testThrowInIteratorReturnRejectsWithAwaitUsingSyntax() {
    {
      returned.push((await iter.next()).value);
      await using it = iter;
    }
  }

  print(testThrowInIteratorReturnRejectsWithAwaitUsingSyntax, CustomError);
  print(returned, [1, 'return']);
}
