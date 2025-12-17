;

let disposed = false;
try {
  using x = {
    [Symbol.dispose]() {
      disposed = true;
    }
  }
  throw new Error("err");
} catch {
}

print(disposed, true);

const valuesInTryFinally = [];
try {
  using x = {
    value: 'x',
    [Symbol.dispose]() {
      valuesInTryFinally.push(this.value);
    }
  }
  throw new Error("err");
} catch {
} finally {
  valuesInTryFinally.push("y");
}
print(valuesInTryFinally, ["x", "y"]);

const valuesInFinallyThenUsing = [];
function testValuesInFinallyThenUsing() {
  using x = {
    val: 'x',
    [Symbol.dispose]() {
      valuesInFinallyThenUsing.push(this.val);
    }
  }
  try {
    throw new Error("err");
  } finally {
    valuesInFinallyThenUsing.push("y");
  }
}
print(testValuesInFinallyThenUsing, Error);
print(valuesInFinallyThenUsing, ["y", "x"]);
