
















var arrObj0 = {};
var func4 = function () {
  arrObj0 = new Proxy(arrObj0, {});
};
for (i =0; i < 2; i++) {
  function v0() {
  }
  v0.prototype = arrObj0;
  var v1 = new v0();
  var test = { prop4: func4() };
}
WScript.Echo("PASS");
