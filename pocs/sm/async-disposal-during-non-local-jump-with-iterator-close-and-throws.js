;

class CustomError1 extends Error {}
class CustomError2 extends Error {}

function createIterator(values, throwingNature) {
  return {
    [Symbol.iterator]: () => ({
      i: 0,
      return() {
        values.push("return");
        if (throwingNature === "return" || throwingNature === "both") {
          throw new CustomError2();
        }
        return { done: true };
      },
      next() {
        return {
          value: {
            val: this.i++,
            [Symbol.asyncDispose]() {
              values.push(this.val);
              if ((throwingNature === "disposal" || throwingNature === "both") && this.val === 3) {
                throw new CustomError1();
              }
            }
          },
          done: false
        }
      }
    })
  }
}

{
  const values = [];
  const iterator = createIterator(values, "disposal");

  async function testDisposalThrowsAreThrown() {
    for (await using d of iterator) {
      if (d.val === 3) {
        break;
      }
    }
  }

  print(testDisposalThrowsAreThrown, CustomError1);
  print(values, [0, 1, 2, 3, "return"]);
}

{
  const values = [];
  const iterator = createIterator(values, "return");

  async function testReturnThrowsAreThrown() {
    for (await using d of iterator) {
      if (d.val === 3) {
        break;
      }
    }
  }

  print(testReturnThrowsAreThrown, CustomError2);
  print(values, [0, 1, 2, 3, "return"]);
}

{
  const values = [];
  const iterator = createIterator(values, "both");

  async function testReturnErrorsAreIgnoredIfDisposalThrows() {
    for (await using d of iterator) {
      if (d.val === 3) {
        break;
      }
    }
  }

  print(testReturnErrorsAreIgnoredIfDisposalThrows, CustomError1);
  print(values, [0, 1, 2, 3, "return"]);
}

{
  let values = [];

  async function testThrowsWithNonlocalJumpsWithLabels(iteratorThrowingNature) {
    const iter = createIterator(values, iteratorThrowingNature);
    outer: {
      for (await using d of iter) {
        if (d.val === 3) {
          break outer;
        }
      }
    }
  }

  print(() => testThrowsWithNonlocalJumpsWithLabels("disposal"), CustomError1);
  print(values, [0, 1, 2, 3, "return"]);

  values = [];

  print(() => testThrowsWithNonlocalJumpsWithLabels("return"), CustomError2);
  print(values, [0, 1, 2, 3, "return"]);

  values = [];
  print(() => testThrowsWithNonlocalJumpsWithLabels("both"), CustomError1);
  print(values, [0, 1, 2, 3, "return"]);
}
