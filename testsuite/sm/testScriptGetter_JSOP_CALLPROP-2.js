



function f() { return 'f'; }
function g() { return 'g'; }
var arr = [f, f, f, f, f, f, f, f, g];
var a = {get m() { return arr[i]; }};

var s = '';
for (var i = 0; i < 9; i++)
    s += a.m();
assertEq(s, 'ffffffffg');
