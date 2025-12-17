var re = /b../;
print(function() {
  return re('abcdefghijklm') + 'z';
});

var re1 = /c../;
re1.call = Function.prototype.call;
print(function() {
  re1.call(null, 'abcdefghijklm') + 'z';
});

var re2 = /d../;
print(function() {
  Function.prototype.call.call(re2, null, 'abcdefghijklm') + 'z';
});

var re3 = /e../;
print(function() {
  Function.prototype.call.apply(
      re3, [null, 'abcdefghijklm']) + 'z';
});

var re4 = /f../;
print(function() {
  Function.prototype.apply.call(
      re4, null, ['abcdefghijklm']) + 'z';
});

var re5 = /g../;
print(function() {
  Function.prototype.apply.apply(
      re4, [null, ['abcdefghijklm']]) + 'z';
});
