;

{
  async function* gen() {
    yield 1;
    yield 2;
    yield 3;
  }

  const returned = [];
  const iter = gen();
  iter.return = async function () {
    returned.push('return');
    return { done: true };
  }
  async function testCallsToIterReturnWithAwaitUsingSyntax() {
    {
      returned.push((await iter.next()).value);
      await using it = iter;
    }
  }
  testCallsToIterReturnWithAwaitUsingSyntax();
  drainJobQueue();
  print(returned, [1, 'return']);
}

{
  async function* gen() {
    yield 1;
    yield 2;
    yield 3;
  }

  const returned = [];
  const iter = gen();
  iter.return = async function () {
    returned.push('return');
    return { done: true };
  }
  async function testCallsToIterReturnWithMultipleReturnCalls() {
    {
      returned.push((await iter.next()).value);
      await using it = iter;
      it.return();
    }
  }
  testCallsToIterReturnWithMultipleReturnCalls();
  drainJobQueue();
  print(returned, [1, 'return', 'return']);
}

{
  const returned = [];
  function getCustomIter() {
    async function* generator() {}
    const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(generator.prototype));
    return {
      values: [1, 2, 3],
      [Symbol.asyncIterator]() {
        return this;
      },
      async next() {
        return { value: this.values.shift(), done: !this.values.length };
      },
      async return() {
        returned.push('return');
        return { done: true };
      },
      __proto__: AsyncIteratorPrototype
    }
  }
  async function testCallsToIterReturnWithCustomIterator() {
    {
      await using it = getCustomIter()[Symbol.asyncIterator]();
      returned.push((await it.next()).value);
      returned.push((await it.next()).value);
    }
  }
  testCallsToIterReturnWithCustomIterator();
  drainJobQueue();

  print(returned, [1, 2, 'return']);
}

{
  async function* gen() {}

  const iter = gen();
  iter.return = null;
  async function testCallsToIterReturnWithNullReturnFn() {
    {
      await using it = iter;
    }
  }

  
  testCallsToIterReturnWithNullReturnFn();
  drainJobQueue();
}

{
  async function* gen() {}

  const iter = gen();
  iter.return = undefined;
  async function testCallsToIterReturnWithUndefinedReturnFn() {
    {
      await using it = iter;
    }
  }

  
  testCallsToIterReturnWithUndefinedReturnFn();
  drainJobQueue();
}

{
  async function* gen() {}

  const iter = gen();
  iter.return = 1;
  async function testIterReturnNotCallable() {
    {
      await using it = iter;
    }
  }

  
  
  print(testIterReturnNotCallable, TypeError);
}
