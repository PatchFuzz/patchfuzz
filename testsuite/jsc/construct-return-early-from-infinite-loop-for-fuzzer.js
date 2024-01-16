

function foo() {
  while(1);
}

if ($vm.useJIT()) {
    Reflect.construct(foo, {});
}
