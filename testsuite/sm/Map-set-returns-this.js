


var m = new Map();
assertEq(m.set('oof', 'RAB'), m);
var a = m.set('foo', 'BAR').get('foo');
assertEq(a, 'BAR');
