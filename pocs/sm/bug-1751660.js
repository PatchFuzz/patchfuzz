function foo() {}

function bar(o) {
  function nested() {
    with (o) {
      return Object(...arguments);
    }
  }

  
  foo();

  
  for(let i = 0; i < 100; i++) {}

  
  return nested();
}


for (var i = 0; i < 5; i++) {
  bar({});
}


print(bar(bar));
