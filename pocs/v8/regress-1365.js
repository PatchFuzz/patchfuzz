var valueOf = Object.prototype.valueOf;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function callGlobalValueOf() { valueOf(); }
function callGlobalHasOwnProperty() { valueOf(); }

print(Object.prototype, Object.prototype.valueOf());
print(callGlobalValueOf);
print(callGlobalHasOwnProperty);

Object.prototype.valueOf();

print(Object.prototype, Object.prototype.valueOf());
print(callGlobalValueOf);
print(callGlobalHasOwnProperty);

function CheckExceptionCallLocal() {
  var valueOf = Object.prototype.valueOf;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var exception = false;
  try { valueOf(); } catch(e) { exception = true; }
  print(exception);
  exception = false;
  try { hasOwnProperty(); } catch(e) { exception = true; }
  print(exception);
}
CheckExceptionCallLocal();

function CheckExceptionCallParameter(f) {
  var exception = false;
  try { f(); } catch(e) { exception = true; }
  print(exception);
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
  print(exception);
}
CheckPotentiallyShadowedByEval();
