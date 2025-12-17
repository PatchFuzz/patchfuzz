;

const values = [];
function functionWithParameterExpressions(param = 0) {
  using d = {
    [Symbol.dispose]() {
      values.push(1);
    }
  };
}
functionWithParameterExpressions();
print(values, [1]);
