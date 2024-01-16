






























var re = /b../;
assertThrows(function() {
  return re('abcdefghijklm') + 'z';
});

var re1 = /c../;
re1.call = Function.prototype.call;
assertThrows(function() {
  re1.call(null, 'abcdefghijklm') + 'z';
});

var re2 = /d../;
assertThrows(function() {
  Function.prototype.call.call(re2, null, 'abcdefghijklm') + 'z';
});

var re3 = /e../;
assertThrows(function() {
  Function.prototype.call.apply(
      re3, [null, 'abcdefghijklm']) + 'z';
});

var re4 = /f../;
assertThrows(function() {
  Function.prototype.apply.call(
      re4, null, ['abcdefghijklm']) + 'z';
});

var re5 = /g../;
assertThrows(function() {
  Function.prototype.apply.apply(
      re4, [null, ['abcdefghijklm']]) + 'z';
});
