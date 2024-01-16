


var s = new Set();
assertEq(s.add('BAR'), s);
var b = s.add('foo').has('foo');
assertEq(b, true);
