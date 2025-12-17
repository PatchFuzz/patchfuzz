;

function callee() {
  evalInFrame(1, "var x = 'success'");
}
function caller(code) {
  eval(code);
  callee();
  return x;
}
print(caller('var y = "ignominy"'), "success");
print(typeof x, "undefined");
