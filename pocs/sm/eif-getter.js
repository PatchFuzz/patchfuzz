;

this.__defineGetter__("someProperty", function () { evalInFrame(1, "x = 'success'"); });
function caller(obj) {
  var x = "failure";
  obj.someProperty;
  return x;
}
print(caller(this), "success");
