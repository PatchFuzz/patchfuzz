function f(value) {
  if (%IsJSReceiver(value)) {
    if ((%IsArray(value))) print(false);
  }
}
f(new String("bar"));


function h(value) {
  if (value == null) {
    if (value === null) print(false);
  }
}
h(undefined);
