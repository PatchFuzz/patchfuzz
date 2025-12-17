var x = {f:20};

function foo() {
  for (var i = 0; i < 10; i++)
    x.f;
}
foo();

gc();



x = undefined;

foo();
