print("multiple-client-source-test-file-1");

function foo() {
  print("foo");
  bar("called-from-test-file-1");
}

function crossFoo(str) {
  print("crossFoo");
  print("str-argument: " + str);
}

foo();
