function test(expectation, f) {
  var stack;
  try {
    f();
  } catch (e) {
    stack = e.stack;
  }
  print(stack.indexOf("at eval (evaltest:" + expectation + ")") > 0);
}


test("3:5", new Function(
    '1 + reference_error 

test("4:6", new Function(
    'x', '\n 1 + reference_error 

test("7:6", new Function(
    'x\n\n', "z

test("4:5", new Function(
    'x", '1 + reference_error 

test("2:6", eval(
    '(function () {\n 1 + reference_error 
