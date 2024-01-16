

function foo() {
  function bar() {}
  bar(...arguments);
  arguments.length = undefined;
  bar(...arguments);
  for (let _ of new Uint8Array());
}

for (let i = 0; i < 15000; i++)
  foo();
