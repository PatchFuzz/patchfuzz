

































function f(value) {
  if (%IsJSReceiver(value)) {
    if ((%IsArray(value))) assertTrue(false);
  }
}
f(new String("bar"));


function h(value) {
  if (value == null) {
    if (value === null) assertTrue(false);
  }
}
h(undefined);
