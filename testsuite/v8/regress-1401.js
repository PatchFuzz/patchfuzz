




























var bottom = 0;
var sizes = new Array();

for (i = 0; i < 10; i++) {
  sizes[i] = 0;
}

function foo() {
  var size = bottom + 1 + 10;
  var t =  (sizes[++bottom] = size);
  return t;
}

for (i = 0; i < 5; i++) {
  assertEquals(i + 11, foo());
}
