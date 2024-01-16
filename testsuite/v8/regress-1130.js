





























Object.prototype.__defineGetter__(0, function() { throw 42; } );

var exception = false;
try {
  eval("(function() { const x; var x })")();
} catch (e) {
  exception = true;
  assertTrue(e instanceof SyntaxError);
}
assertTrue(exception);
