;

const disposed = [];
function testThrowsInsideInnerLexicalScope() {
  using x = {
    value: 'x',
    [Symbol.dispose]() {
      disposed.push(this.value);
    }
  }
  let b;
  {
    const a = 1;
    b = () => a;
    disposed.push('y');
    throw new Error("err");
  }
}
print(testThrowsInsideInnerLexicalScope, Error);
print(disposed, ['y', 'x']);

const disposed2 = [];
function lexicalFnWithThrow(th) {
  const a = 1;
  if (th) {
    throw new Error("err");
  }
  return () => a;
}
function testThrowsInsideInnerLexicalScope2() {
  using x = {
    value: 'x',
    [Symbol.dispose]() {
      disposed2.push(this.value);
    }
  }
  let b;
  {
    disposed2.push('y');
    b = lexicalFnWithThrow(true);
  }
}
print(testThrowsInsideInnerLexicalScope2, Error);
print(disposed2, ['y', 'x']);
