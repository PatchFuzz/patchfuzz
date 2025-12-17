function print(fun, errorType) {
  try {
    fun();
    print(true, false, "Expected error, but none was thrown");
  } catch (e) {
    print(e instanceof errorType, true, "Wrong error type thrown");
  }
}

Object.prototype[1] = 2; 

print(String.prototype.startsWith.length, 1);
print(String.prototype.propertyIsEnumerable('startsWith'), false);

print('undefined'.startsWith(), true);
print('undefined'.startsWith(undefined), true);
print('undefined'.startsWith(null), false);
print('null'.startsWith(), false);
print('null'.startsWith(undefined), false);
print('null'.startsWith(null), true);

print('abc'.startsWith(), false);
print('abc'.startsWith(''), true);
print('abc'.startsWith('\0'), false);
print('abc'.startsWith('a'), true);
print('abc'.startsWith('b'), false);
print('abc'.startsWith('ab'), true);
print('abc'.startsWith('bc'), false);
print('abc'.startsWith('abc'), true);
print('abc'.startsWith('bcd'), false);
print('abc'.startsWith('abcd'), false);
print('abc'.startsWith('bcde'), false);

print('abc'.startsWith('', NaN), true);
print('abc'.startsWith('\0', NaN), false);
print('abc'.startsWith('a', NaN), true);
print('abc'.startsWith('b', NaN), false);
print('abc'.startsWith('ab', NaN), true);
print('abc'.startsWith('bc', NaN), false);
print('abc'.startsWith('abc', NaN), true);
print('abc'.startsWith('bcd', NaN), false);
print('abc'.startsWith('abcd', NaN), false);
print('abc'.startsWith('bcde', NaN), false);

print('abc'.startsWith('', false), true);
print('abc'.startsWith('\0', false), false);
print('abc'.startsWith('a', false), true);
print('abc'.startsWith('b', false), false);
print('abc'.startsWith('ab', false), true);
print('abc'.startsWith('bc', false), false);
print('abc'.startsWith('abc', false), true);
print('abc'.startsWith('bcd', false), false);
print('abc'.startsWith('abcd', false), false);
print('abc'.startsWith('bcde', false), false);

print('abc'.startsWith('', undefined), true);
print('abc'.startsWith('\0', undefined), false);
print('abc'.startsWith('a', undefined), true);
print('abc'.startsWith('b', undefined), false);
print('abc'.startsWith('ab', undefined), true);
print('abc'.startsWith('bc', undefined), false);
print('abc'.startsWith('abc', undefined), true);
print('abc'.startsWith('bcd', undefined), false);
print('abc'.startsWith('abcd', undefined), false);
print('abc'.startsWith('bcde', undefined), false);

print('abc'.startsWith('', null), true);
print('abc'.startsWith('\0', null), false);
print('abc'.startsWith('a', null), true);
print('abc'.startsWith('b', null), false);
print('abc'.startsWith('ab', null), true);
print('abc'.startsWith('bc', null), false);
print('abc'.startsWith('abc', null), true);
print('abc'.startsWith('bcd', null), false);
print('abc'.startsWith('abcd', null), false);
print('abc'.startsWith('bcde', null), false);

print('abc'.startsWith('', -Infinity), true);
print('abc'.startsWith('\0', -Infinity), false);
print('abc'.startsWith('a', -Infinity), true);
print('abc'.startsWith('b', -Infinity), false);
print('abc'.startsWith('ab', -Infinity), true);
print('abc'.startsWith('bc', -Infinity), false);
print('abc'.startsWith('abc', -Infinity), true);
print('abc'.startsWith('bcd', -Infinity), false);
print('abc'.startsWith('abcd', -Infinity), false);
print('abc'.startsWith('bcde', -Infinity), false);

print('abc'.startsWith('', -1), true);
print('abc'.startsWith('\0', -1), false);
print('abc'.startsWith('a', -1), true);
print('abc'.startsWith('b', -1), false);
print('abc'.startsWith('ab', -1), true);
print('abc'.startsWith('bc', -1), false);
print('abc'.startsWith('abc', -1), true);
print('abc'.startsWith('bcd', -1), false);
print('abc'.startsWith('abcd', -1), false);
print('abc'.startsWith('bcde', -1), false);

print('abc'.startsWith('', -0), true);
print('abc'.startsWith('\0', -0), false);
print('abc'.startsWith('a', -0), true);
print('abc'.startsWith('b', -0), false);
print('abc'.startsWith('ab', -0), true);
print('abc'.startsWith('bc', -0), false);
print('abc'.startsWith('abc', -0), true);
print('abc'.startsWith('bcd', -0), false);
print('abc'.startsWith('abcd', -0), false);
print('abc'.startsWith('bcde', -0), false);

print('abc'.startsWith('', +0), true);
print('abc'.startsWith('\0', +0), false);
print('abc'.startsWith('a', +0), true);
print('abc'.startsWith('b', +0), false);
print('abc'.startsWith('ab', +0), true);
print('abc'.startsWith('bc', +0), false);
print('abc'.startsWith('abc', +0), true);
print('abc'.startsWith('bcd', +0), false);
print('abc'.startsWith('abcd', +0), false);
print('abc'.startsWith('bcde', +0), false);

print('abc'.startsWith('', 1), true);
print('abc'.startsWith('\0', 1), false);
print('abc'.startsWith('a', 1), false);
print('abc'.startsWith('b', 1), true);
print('abc'.startsWith('ab', 1), false);
print('abc'.startsWith('bc', 1), true);
print('abc'.startsWith('abc', 1), false);
print('abc'.startsWith('bcd', 1), false);
print('abc'.startsWith('abcd', 1), false);
print('abc'.startsWith('bcde', 1), false);

print('abc'.startsWith('', +Infinity), true);
print('abc'.startsWith('\0', +Infinity), false);
print('abc'.startsWith('a', +Infinity), false);
print('abc'.startsWith('b', +Infinity), false);
print('abc'.startsWith('ab', +Infinity), false);
print('abc'.startsWith('bc', +Infinity), false);
print('abc'.startsWith('abc', +Infinity), false);
print('abc'.startsWith('bcd', +Infinity), false);
print('abc'.startsWith('abcd', +Infinity), false);
print('abc'.startsWith('bcde', +Infinity), false);

print('abc'.startsWith('', true), true);
print('abc'.startsWith('\0', true), false);
print('abc'.startsWith('a', true), false);
print('abc'.startsWith('b', true), true);
print('abc'.startsWith('ab', true), false);
print('abc'.startsWith('bc', true), true);
print('abc'.startsWith('abc', true), false);
print('abc'.startsWith('bcd', true), false);
print('abc'.startsWith('abcd', true), false);
print('abc'.startsWith('bcde', true), false);

print('abc'.startsWith('', 'x'), true);
print('abc'.startsWith('\0', 'x'), false);
print('abc'.startsWith('a', 'x'), true);
print('abc'.startsWith('b', 'x'), false);
print('abc'.startsWith('ab', 'x'), true);
print('abc'.startsWith('bc', 'x'), false);
print('abc'.startsWith('abc', 'x'), true);
print('abc'.startsWith('bcd', 'x'), false);
print('abc'.startsWith('abcd', 'x'), false);
print('abc'.startsWith('bcde', 'x'), false);

print('[a-z]+(bar)?'.startsWith('[a-z]+'), true);
print(function() { '[a-z]+(bar)?'.startsWith(/[a-z]+/); }, TypeError);
print('[a-z]+(bar)?'.startsWith('(bar)?', 6), true);
print(function() { '[a-z]+(bar)?'.startsWith(/(bar)?/); }, TypeError);
print(function() { '[a-z]+/(bar)?/'.startsWith(/(bar)?/); }, TypeError);
var global = newGlobal();
global.eval('this.re = /(bar)?/');
print(function() { '[a-z]+/(bar)?/'.startsWith(global.re); }, TypeError);


var string = 'I\xF1t\xEBrn\xE2ti\xF4n\xE0liz\xE6ti\xF8n\u2603\uD83D\uDCA9';
print(string.startsWith(''), true);
print(string.startsWith('\xF1t\xEBr'), false);
print(string.startsWith('\xF1t\xEBr', 1), true);
print(string.startsWith('\xE0liz\xE6'), false);
print(string.startsWith('\xE0liz\xE6', 11), true);
print(string.startsWith('\xF8n\u2603\uD83D\uDCA9'), false);
print(string.startsWith('\xF8n\u2603\uD83D\uDCA9', 18), true);
print(string.startsWith('\u2603'), false);
print(string.startsWith('\u2603', 20), true);
print(string.startsWith('\uD83D\uDCA9'), false);
print(string.startsWith('\uD83D\uDCA9', 21), true);

print(function() { String.prototype.startsWith.call(undefined); }, TypeError);
print(function() { String.prototype.startsWith.call(undefined, 'b'); }, TypeError);
print(function() { String.prototype.startsWith.call(undefined, 'b', 4); }, TypeError);
print(function() { String.prototype.startsWith.call(null); }, TypeError);
print(function() { String.prototype.startsWith.call(null, 'b'); }, TypeError);
print(function() { String.prototype.startsWith.call(null, 'b', 4); }, TypeError);
print(String.prototype.startsWith.call(42, '2'), false);
print(String.prototype.startsWith.call(42, '4'), true);
print(String.prototype.startsWith.call(42, 'b', 4), false);
print(String.prototype.startsWith.call(42, '2', 1), true);
print(String.prototype.startsWith.call(42, '2', 4), false);
print(String.prototype.startsWith.call({ 'toString': function() { return 'abc'; } }, 'b', 0), false);
print(String.prototype.startsWith.call({ 'toString': function() { return 'abc'; } }, 'b', 1), true);
print(String.prototype.startsWith.call({ 'toString': function() { return 'abc'; } }, 'b', 2), false);
print(function() { String.prototype.startsWith.call({ 'toString': function() { throw RangeError(); } }, /./); }, RangeError);
print(function() { String.prototype.startsWith.call({ 'toString': function() { return 'abc'; } }, /./); }, TypeError);

print(function() { String.prototype.startsWith.apply(undefined); }, TypeError);
print(function() { String.prototype.startsWith.apply(undefined, ['b']); }, TypeError);
print(function() { String.prototype.startsWith.apply(undefined, ['b', 4]); }, TypeError);
print(function() { String.prototype.startsWith.apply(null); }, TypeError);
print(function() { String.prototype.startsWith.apply(null, ['b']); }, TypeError);
print(function() { String.prototype.startsWith.apply(null, ['b', 4]); }, TypeError);
print(String.prototype.startsWith.apply(42, ['2']), false);
print(String.prototype.startsWith.apply(42, ['4']), true);
print(String.prototype.startsWith.apply(42, ['b', 4]), false);
print(String.prototype.startsWith.apply(42, ['2', 1]), true);
print(String.prototype.startsWith.apply(42, ['2', 4]), false);
print(String.prototype.startsWith.apply({ 'toString': function() { return 'abc'; } }, ['b', 0]), false);
print(String.prototype.startsWith.apply({ 'toString': function() { return 'abc'; } }, ['b', 1]), true);
print(String.prototype.startsWith.apply({ 'toString': function() { return 'abc'; } }, ['b', 2]), false);
print(function() { String.prototype.startsWith.apply({ 'toString': function() { throw RangeError(); } }, [/./]); }, RangeError);
print(function() { String.prototype.startsWith.apply({ 'toString': function() { return 'abc'; } }, [/./]); }, TypeError);
