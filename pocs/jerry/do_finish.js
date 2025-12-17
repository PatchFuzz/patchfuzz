print("finish-test");

function foo() {
  print("foo");
  return bar();
}

function bar() {
  return "bar";
}

print(foo());

function dog() {
  bark();
  sit();
  bark();
}

function bark() {
  print("*bark*");
}

function sit() {
  print("*sit*");
}

dog();

print("END: finish-test");
