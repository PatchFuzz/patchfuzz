function print(fun, errorType) {
  try {
    fun();
    print(true, false, "Expected error, but none was thrown");
  } catch (e) {
    print(e instanceof errorType, true, "Wrong error type thrown");
  }
}
print(String.prototype.endsWith.length, 1);
print(String.prototype.propertyIsEnumerable('endsWith'), false);

print('undefined'.endsWith(), true);
print('undefined'.endsWith(undefined), true);
print('undefined'.endsWith(null), false);
print('null'.endsWith(), false);
print('null'.endsWith(undefined), false);
print('null'.endsWith(null), true);

print('abc'.endsWith(), false);
print('abc'.endsWith(''), true);
print('abc'.endsWith('\0'), false);
print('abc'.endsWith('c'), true);
print('abc'.endsWith('b'), false);
print('abc'.endsWith('a'), false);
print('abc'.endsWith('ab'), false);
print('abc'.endsWith('bc'), true);
print('abc'.endsWith('abc'), true);
print('abc'.endsWith('bcd'), false);
print('abc'.endsWith('abcd'), false);
print('abc'.endsWith('bcde'), false);

print('abc'.endsWith('', NaN), true);
print('abc'.endsWith('\0', NaN), false);
print('abc'.endsWith('c', NaN), false);
print('abc'.endsWith('b', NaN), false);
print('abc'.endsWith('a', NaN), false);
print('abc'.endsWith('ab', NaN), false);
print('abc'.endsWith('bc', NaN), false);
print('abc'.endsWith('abc', NaN), false);
print('abc'.endsWith('bcd', NaN), false);
print('abc'.endsWith('abcd', NaN), false);
print('abc'.endsWith('bcde', NaN), false);

print('abc'.endsWith('', false), true);
print('abc'.endsWith('\0', false), false);
print('abc'.endsWith('c', false), false);
print('abc'.endsWith('b', false), false);
print('abc'.endsWith('a', false), false);
print('abc'.endsWith('ab', false), false);
print('abc'.endsWith('bc', false), false);
print('abc'.endsWith('abc', false), false);
print('abc'.endsWith('bcd', false), false);
print('abc'.endsWith('abcd', false), false);
print('abc'.endsWith('bcde', false), false);

print('abc'.endsWith('', undefined), true);
print('abc'.endsWith('\0', undefined), false);
print('abc'.endsWith('c', undefined), true);
print('abc'.endsWith('b', undefined), false);
print('abc'.endsWith('a', undefined), false);
print('abc'.endsWith('ab', undefined), false);
print('abc'.endsWith('bc', undefined), true);
print('abc'.endsWith('abc', undefined), true);
print('abc'.endsWith('bcd', undefined), false);
print('abc'.endsWith('abcd', undefined), false);
print('abc'.endsWith('bcde', undefined), false);

print('abc'.endsWith('', null), true);
print('abc'.endsWith('\0', null), false);
print('abc'.endsWith('c', null), false);
print('abc'.endsWith('b', null), false);
print('abc'.endsWith('a', null), false);
print('abc'.endsWith('ab', null), false);
print('abc'.endsWith('bc', null), false);
print('abc'.endsWith('abc', null), false);
print('abc'.endsWith('bcd', null), false);
print('abc'.endsWith('abcd', null), false);
print('abc'.endsWith('bcde', null), false);

print('abc'.endsWith('', -Infinity), true);
print('abc'.endsWith('\0', -Infinity), false);
print('abc'.endsWith('c', -Infinity), false);
print('abc'.endsWith('b', -Infinity), false);
print('abc'.endsWith('a', -Infinity), false);
print('abc'.endsWith('ab', -Infinity), false);
print('abc'.endsWith('bc', -Infinity), false);
print('abc'.endsWith('abc', -Infinity), false);
print('abc'.endsWith('bcd', -Infinity), false);
print('abc'.endsWith('abcd', -Infinity), false);
print('abc'.endsWith('bcde', -Infinity), false);

print('abc'.endsWith('', -1), true);
print('abc'.endsWith('\0', -1), false);
print('abc'.endsWith('c', -1), false);
print('abc'.endsWith('b', -1), false);
print('abc'.endsWith('a', -1), false);
print('abc'.endsWith('ab', -1), false);
print('abc'.endsWith('bc', -1), false);
print('abc'.endsWith('abc', -1), false);
print('abc'.endsWith('bcd', -1), false);
print('abc'.endsWith('abcd', -1), false);
print('abc'.endsWith('bcde', -1), false);

print('abc'.endsWith('', -0), true);
print('abc'.endsWith('\0', -0), false);
print('abc'.endsWith('c', -0), false);
print('abc'.endsWith('b', -0), false);
print('abc'.endsWith('a', -0), false);
print('abc'.endsWith('ab', -0), false);
print('abc'.endsWith('bc', -0), false);
print('abc'.endsWith('abc', -0), false);
print('abc'.endsWith('bcd', -0), false);
print('abc'.endsWith('abcd', -0), false);
print('abc'.endsWith('bcde', -0), false);

print('abc'.endsWith('', +0), true);
print('abc'.endsWith('\0', +0), false);
print('abc'.endsWith('c', +0), false);
print('abc'.endsWith('b', +0), false);
print('abc'.endsWith('a', +0), false);
print('abc'.endsWith('ab', +0), false);
print('abc'.endsWith('bc', +0), false);
print('abc'.endsWith('abc', +0), false);
print('abc'.endsWith('bcd', +0), false);
print('abc'.endsWith('abcd', +0), false);
print('abc'.endsWith('bcde', +0), false);

print('abc'.endsWith('', 1), true);
print('abc'.endsWith('\0', 1), false);
print('abc'.endsWith('c', 1), false);
print('abc'.endsWith('b', 1), false);
print('abc'.endsWith('ab', 1), false);
print('abc'.endsWith('bc', 1), false);
print('abc'.endsWith('abc', 1), false);
print('abc'.endsWith('bcd', 1), false);
print('abc'.endsWith('abcd', 1), false);
print('abc'.endsWith('bcde', 1), false);

print('abc'.endsWith('', 2), true);
print('abc'.endsWith('\0', 2), false);
print('abc'.endsWith('c', 2), false);
print('abc'.endsWith('b', 2), true);
print('abc'.endsWith('ab', 2), true);
print('abc'.endsWith('bc', 2), false);
print('abc'.endsWith('abc', 2), false);
print('abc'.endsWith('bcd', 2), false);
print('abc'.endsWith('abcd', 2), false);
print('abc'.endsWith('bcde', 2), false);

print('abc'.endsWith('', +Infinity), true);
print('abc'.endsWith('\0', +Infinity), false);
print('abc'.endsWith('c', +Infinity), true);
print('abc'.endsWith('b', +Infinity), false);
print('abc'.endsWith('a', +Infinity), false);
print('abc'.endsWith('ab', +Infinity), false);
print('abc'.endsWith('bc', +Infinity), true);
print('abc'.endsWith('abc', +Infinity), true);
print('abc'.endsWith('bcd', +Infinity), false);
print('abc'.endsWith('abcd', +Infinity), false);
print('abc'.endsWith('bcde', +Infinity), false);

print('abc'.endsWith('', true), true);
print('abc'.endsWith('\0', true), false);
print('abc'.endsWith('c', true), false);
print('abc'.endsWith('b', true), false);
print('abc'.endsWith('ab', true), false);
print('abc'.endsWith('bc', true), false);
print('abc'.endsWith('abc', true), false);
print('abc'.endsWith('bcd', true), false);
print('abc'.endsWith('abcd', true), false);
print('abc'.endsWith('bcde', true), false);

print('abc'.endsWith('', 'x'), true);
print('abc'.endsWith('\0', 'x'), false);
print('abc'.endsWith('c', 'x'), false);
print('abc'.endsWith('b', 'x'), false);
print('abc'.endsWith('a', 'x'), false);
print('abc'.endsWith('ab', 'x'), false);
print('abc'.endsWith('bc', 'x'), false);
print('abc'.endsWith('abc', 'x'), false);
print('abc'.endsWith('bcd', 'x'), false);
print('abc'.endsWith('abcd', 'x'), false);
print('abc'.endsWith('bcde', 'x'), false);

print('[a-z]+(bar)?'.endsWith('(bar)?'), true);
print(function() { '[a-z]+(bar)?'.endsWith(/(bar)?/); }, TypeError);
print('[a-z]+(bar)?'.endsWith('[a-z]+', 6), true);
print(function() { '[a-z]+(bar)?'.endsWith(/(bar)?/); }, TypeError);
print(function() { '[a-z]+/(bar)?/'.endsWith(/(bar)?/); }, TypeError);
var global = newGlobal();
global.eval('this.re = /(bar)?/');
print(function() { '[a-z]+/(bar)?/'.endsWith(global.re); }, TypeError);


var string = 'I\xF1t\xEBrn\xE2ti\xF4n\xE0liz\xE6ti\xF8n\u2603\uD83D\uDCA9';
print(string.endsWith(''), true);
print(string.endsWith('\xF1t\xEBr'), false);
print(string.endsWith('\xF1t\xEBr', 5), true);
print(string.endsWith('\xE0liz\xE6'), false);
print(string.endsWith('\xE0liz\xE6', 16), true);
print(string.endsWith('\xF8n\u2603\uD83D\uDCA9'), true);
print(string.endsWith('\xF8n\u2603\uD83D\uDCA9', 23), true);
print(string.endsWith('\u2603'), false);
print(string.endsWith('\u2603', 21), true);
print(string.endsWith('\uD83D\uDCA9'), true);
print(string.endsWith('\uD83D\uDCA9', 23), true);

print(function() { String.prototype.endsWith.call(undefined); }, TypeError);
print(function() { String.prototype.endsWith.call(undefined, 'b'); }, TypeError);
print(function() { String.prototype.endsWith.call(undefined, 'b', 4); }, TypeError);
print(function() { String.prototype.endsWith.call(null); }, TypeError);
print(function() { String.prototype.endsWith.call(null, 'b'); }, TypeError);
print(function() { String.prototype.endsWith.call(null, 'b', 4); }, TypeError);
print(String.prototype.endsWith.call(42, '2'), true);
print(String.prototype.endsWith.call(42, '4'), false);
print(String.prototype.endsWith.call(42, 'b', 4), false);
print(String.prototype.endsWith.call(42, '2', 1), false);
print(String.prototype.endsWith.call(42, '2', 4), true);
print(String.prototype.endsWith.call({ 'toString': function() { return 'abc'; } }, 'b', 0), false);
print(String.prototype.endsWith.call({ 'toString': function() { return 'abc'; } }, 'b', 1), false);
print(String.prototype.endsWith.call({ 'toString': function() { return 'abc'; } }, 'b', 2), true);
print(function() { String.prototype.endsWith.call({ 'toString': function() { throw RangeError(); } }, /./); }, RangeError);
print(function() { String.prototype.endsWith.call({ 'toString': function() { return 'abc' } }, /./); }, TypeError);

print(function() { String.prototype.endsWith.apply(undefined); }, TypeError);
print(function() { String.prototype.endsWith.apply(undefined, ['b']); }, TypeError);
print(function() { String.prototype.endsWith.apply(undefined, ['b', 4]); }, TypeError);
print(function() { String.prototype.endsWith.apply(null); }, TypeError);
print(function() { String.prototype.endsWith.apply(null, ['b']); }, TypeError);
print(function() { String.prototype.endsWith.apply(null, ['b', 4]); }, TypeError);
print(String.prototype.endsWith.apply(42, ['2']), true);
print(String.prototype.endsWith.apply(42, ['4']), false);
print(String.prototype.endsWith.apply(42, ['b', 4]), false);
print(String.prototype.endsWith.apply(42, ['2', 1]), false);
print(String.prototype.endsWith.apply(42, ['2', 4]), true);
print(String.prototype.endsWith.apply({ 'toString': function() { return 'abc'; } }, ['b', 0]), false);
print(String.prototype.endsWith.apply({ 'toString': function() { return 'abc'; } }, ['b', 1]), false);
print(String.prototype.endsWith.apply({ 'toString': function() { return 'abc'; } }, ['b', 2]), true);
print(function() { String.prototype.endsWith.apply({ 'toString': function() { throw RangeError(); } }, [/./]); }, RangeError);
print(function() { String.prototype.endsWith.apply({ 'toString': function() { return 'abc' } }, [/./]); }, TypeError);
