
const a = [null, 0, 0, 0, 0, 0, 0];

function foo() {
  for (let i=0; i<10; i++) {}
}

for (let i=0; i<10000; i++) {
  a.sort(foo);
}
