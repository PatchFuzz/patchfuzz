var s = new Set();
print(s.add('BAR'), s);
var b = s.add('foo').has('foo');
print(b, true);
