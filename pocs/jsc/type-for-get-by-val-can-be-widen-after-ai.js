function Hello(y) {
  this.y = y;
  this.x = foo(this.y);
}
function foo(z) {
  try {
    for (var i = 0; i < 1; i++) {
      z[i];
    }
  } catch {
  }
}
new Hello('a');
new Hello('a');
for (let i = 0; i < 100; ++i) {
  new Hello();
}


for (let i = 0; i < testLoopCount; ++i) {
    print();
}
