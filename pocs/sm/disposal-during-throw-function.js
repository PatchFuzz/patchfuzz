;

const duringThrow = [];
function testDisposalDuringThrow() {
  using a = {
    value: "a",
    [Symbol.dispose]() {
      duringThrow.push(this.value);
    }
  };
  throw new Error("err 1");
}
print(testDisposalDuringThrow, Error);
print(duringThrow, ["a"]);

const duringBlockAndThrow = [];
function testDisposalDuringBlockAndThrow() {
  using a = {
    value: "a",
    [Symbol.dispose]() {
      duringBlockAndThrow.push(this.value);
    }
  };
  {
    using b = {
      value: "b",
      [Symbol.dispose]() {
        duringBlockAndThrow.push(this.value);
      }
    };
    throw new Error("err 2");
  }
}
print(testDisposalDuringBlockAndThrow, Error);
print(duringBlockAndThrow, ["b", "a"]);
