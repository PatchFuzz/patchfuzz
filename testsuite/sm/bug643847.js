


function f(o) {
  o.constructor = function() {};
}
__proto__.__defineSetter__('constructor',
function(v) {});
f({});
Object.defineProperty(__proto__, 'constructor', {
  writable: true,
});
f({});
