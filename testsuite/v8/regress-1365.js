


































var valueOf = Object.prototype.valueOf;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function callGlobalValueOf() { valueOf(); }
function callGlobalHasOwnProperty() { valueOf(); }

assertEquals(Object.prototype, Object.prototype.valueOf());
assertThrows(callGlobalValueOf);
assertThrows(callGlobalHasOwnProperty);

Object.prototype.valueOf();

assertEquals(Object.prototype, Object.prototype.valueOf());
assertThrows(callGlobalValueOf);
assertThrows(callGlobalHasOwnProperty);

function CheckExceptionCallLocal() {
  var valueOf = Object.prototype.valueOf;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var exception = false;
  try { valueOf(); } catch(e) { exception = true; }
  assertTrue(exception);
  exception = false;
  try { hasOwnProperty(); } catch(e) { exception = true; }
  assertTrue(exception);
}
CheckExceptionCallLocal();

function CheckExceptionCallParameter(f) {
  var exception = false;
  try { f(); } catch(e) { exception = true; }
  assertTrue(exception);
}
CheckExceptionCallParameter(Object.prototype.valueOf);
CheckExceptionCallParameter(Object.prototype.hasOwnProperty);

function CheckPotentiallyShadowedByEval() {
  var exception = false;
  try {
    eval("hasOwnProperty('x')");
  } catch(e) {
    exception = true;
  }
  assertTrue(exception);
}
CheckPotentiallyShadowedByEval();
