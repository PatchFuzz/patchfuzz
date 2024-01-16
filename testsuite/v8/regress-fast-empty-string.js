



var o = {};
o[""] = 1;
var x = {__proto__:o};
for (i = 0; i < 3; i++) {
  o[""];
}
for (i = 0; i < 3; i++) {
  assertEquals(undefined, o.x);
}
