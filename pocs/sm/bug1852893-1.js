function foo(o) {
  return foo_inner(o);
}

function foo_inner(o) {
  return o.x;
}
with ({}) {}

for (var i = 0; i < 13; i++) {
  foo({x:1, ["y" + (i % 5)]: 2});
}

for (var i = 0; i < 17; i++) {
  foo({x: 1, ["y" + (i % 8)]: 2});
}

eval("for (var i = 0; i < 10; i++) foo({y: 1, x:2})")


gc();

for (var i = 0; i < 50; i++) {
  foo({x: 1, ["y" + (i % 3)]: 2});
}
