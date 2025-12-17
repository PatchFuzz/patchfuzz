;

function callee() {
  evalInFrame(1, "var x = 'success'");
}
callee();
print(x, "success");
