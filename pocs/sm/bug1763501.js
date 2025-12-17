function test(expected) {
  with ({}) print(new.target, expected);
}

test(undefined);
new test(test);
