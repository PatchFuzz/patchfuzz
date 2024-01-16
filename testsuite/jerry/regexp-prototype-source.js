













var regexp = /fooBar/ig;
assert(regexp.source === 'fooBar');

assert(new RegExp().source === '(?:)');

assert(new RegExp('/foo/').source === '\\/foo\\/');
assert(new RegExp('/foo/').source.length === 7);

assert(new RegExp('bar', 'ug').source === 'bar');

assert(new RegExp('/\?/').source === '\\/?\\/');
assert(new RegExp('/\?/').source.length === 5);

assert(new RegExp('\n').source === '\\n');

assert(new RegExp('\r').source === '\\r');

assert(new RegExp('\u2028').source === '\\u2028');

assert(new RegExp('\u2029').source === '\\u2029');

assert(new RegExp('/\n/').source === '\\/\\n\\/');
assert(new RegExp('/\n/').source.length === 6);

assert(new RegExp(/\/\
assert(new RegExp(/\?\

assert (RegExp.prototype.source === '(?:)')

var sourceProp = Object.getOwnPropertyDescriptor (RegExp.prototype, "source");
try {
  sourceProp.get.call({});
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}
