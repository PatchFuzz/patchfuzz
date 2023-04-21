













try {
  e;
  print(false);
} catch (e) {
  eval("var e");
}
print(e === undefined);

function f() {
  try {
    throw 1;
    print(false);
  } catch (e) {
    eval("var e");
  }
}
f();
