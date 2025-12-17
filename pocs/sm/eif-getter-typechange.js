;

this.__defineGetter__("someProperty", function () { evalInFrame(1, "var x = 'success'"); });
function caller(obj) {
  var x = ({ dana : 'zuul' });
  obj.someProperty;
  return x;
}
print(caller(this), "success");
