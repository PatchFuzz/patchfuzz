print("multiple-client-source-test-file-2");

function bar(str) {
  print("bar");
  print("str-argument: " + str);
  crossFoo("called-from-test-file-2");
}
