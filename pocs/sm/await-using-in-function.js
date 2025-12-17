;

{
  const disposed = [];
  async function testAwaitUsingInFunction() {
    await using x = {
      [Symbol.asyncDispose]() {
        disposed.push(1);
      }
    }

    await using y = {
      [Symbol.asyncDispose]() {
        disposed.push(2);
      }
    }

    await using z = {
      [Symbol.asyncDispose]() {
        disposed.push(3);
      }
    }
  }
  testAwaitUsingInFunction();
  
  
  
  
  print(disposed, [3]);
  drainJobQueue();
  print(disposed, [3, 2, 1]);
}

{
  const values = [];
  async function testDisposedInFunctionAndBlock() {
    await using a = {
      [Symbol.dispose]: () => values.push("a")
    };

    await using b = {
      [Symbol.dispose]: () => values.push("b")
    };

    {
      await using c = {
        [Symbol.dispose]: () => values.push("c")
      };
  
      {
        await using d = {
          [Symbol.dispose]: () => values.push("d")
        };
      }

      await using e = {
        [Symbol.dispose]: () => values.push("e")
      };
    }

    await using f = {
      [Symbol.dispose]: () => values.push("f")
    };

    values.push("g");
  }
  testDisposedInFunctionAndBlock();
  print(values, ["d"]);
  drainJobQueue();
  print(values, ["d", "e", "c", "g", "f", "b", "a"]);
}
