function foo(f) {
  f.call({});
}

with ({}) {}

function f1() {}
function f2() {}


for (var i = 0; i < 1000; i++) {
  foo(f1, {});
  foo(f2, {});
}

function print(f) {
  var caught = false;
  try {
    foo(f);
  } catch {
    caught = true;
  }
  print(caught, true);
}


print(0);
print(undefined);
print("");


print({});
