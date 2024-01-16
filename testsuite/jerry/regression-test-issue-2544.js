













Object.defineProperty(Array.prototype, 0, { get : function () { throw $; } });
var global_err = undefined;
Promise.race([ , this]).then(Error).catch(function(err) { global_err = err; });

function __checkAsync() {
  assert(global_err instanceof ReferenceError);
}
